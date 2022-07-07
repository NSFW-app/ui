import { ComponentProps } from '@stitches/react'
import { CSS } from 'lib/theme'
import { Box } from 'primitives/Box'
import React, { ReactElement } from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  Sensor,
  DroppableProps,
} from 'react-beautiful-dnd'

export interface DragAndDropReorderProps extends ComponentProps<typeof Box> {
  children: ReactElement[]
  whileDraggingCss?: CSS
  sensors?: Sensor[]
  onReorder?: (items: ReactElement[], res: DropResult) => void
  direction?: DroppableProps['direction']
  isDragDisabled?: boolean
}

const keyCodeMap = {
  tab: 9,
  space: 32,
  arrowDown: 40,
  arrowUp: 38,
}

// OK I know imitating keystrokes isn't ideal but we need a way to have buttons
// that work with the drag and drop reordering so hooking into the default
// keystrokes handlded by react-beautiful-dnd is by far the easiest way to solve this.
// Means we can use react-beautiful-dnd default animations too.
export const mimicKeyStroke = (
  target: Element,
  key: keyof typeof keyCodeMap,
  timeout?: number
) => {
  return new Promise<void>((resolve) => {
    target.dispatchEvent(
      new KeyboardEvent('keydown', { keyCode: keyCodeMap[key] })
    )
    target.dispatchEvent(
      new KeyboardEvent('keyup', { keyCode: keyCodeMap[key] })
    )
    setTimeout(() => {
      resolve()
    }, timeout || 0)
  })
}

export const moveItemUp = ({
  targetElementId,
}: {
  targetElementId: string
}) => {
  const el = document.getElementById(targetElementId)
  if (el) {
    mimicKeyStroke(el, 'space', 200)
      .then(() => mimicKeyStroke(el, 'arrowUp', 200))
      .then(() => mimicKeyStroke(el, 'space'))
  }
}

export const moveItemDown = ({
  targetElementId,
}: {
  targetElementId: string
}) => {
  const el = document.getElementById(targetElementId)
  if (el) {
    mimicKeyStroke(el, 'space', 200)
      .then(() => mimicKeyStroke(el, 'arrowDown', 200))
      .then(() => mimicKeyStroke(el, 'space'))
  }
}

export interface DragItemProps extends ComponentProps<typeof Box> {
  index: number
  whileDraggingCss?: CSS
  children: React.ReactNode
  id: string
  isDragDisabled?: boolean
}

export const DragItem: React.FC<DragItemProps> = ({
  index,
  id,
  css = {},
  whileDraggingCss,
  children,
  onClick,
  isDragDisabled,
}) => {
  return (
    <Draggable
      draggableId={`drag_item__${id}`}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided, snapshot) => (
        <Box
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          css={snapshot.isDragging && whileDraggingCss ? whileDraggingCss : css}
          onClick={onClick}
        >
          {children}
        </Box>
      )}
    </Draggable>
  )
}

export const DragAndDropReorder: React.FC<DragAndDropReorderProps> = ({
  children,
  css = {},
  whileDraggingCss,
  sensors,
  onReorder,
  direction = 'vertical',
}) => {
  const reorder = (
    list: Array<ReactElement>,
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return
    }

    if (result.destination.index === result.source.index) {
      return
    }

    const reorderedItems = reorder(
      children,
      result.source.index,
      result.destination.index
    )

    if (onReorder) {
      onReorder(reorderedItems, result)
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} sensors={sensors}>
      <Droppable droppableId='list' direction={direction}>
        {(provided, snapshot) => {
          return (
            <Box
              ref={provided.innerRef}
              {...provided.droppableProps}
              css={
                snapshot.isDraggingOver && whileDraggingCss
                  ? whileDraggingCss
                  : css
              }
            >
              {children}
              {provided.placeholder}
            </Box>
          )
        }}
      </Droppable>
    </DragDropContext>
  )
}

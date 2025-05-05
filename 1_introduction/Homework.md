# Problem 1

## Create a Row component

1. Create a Row component with props `props: PropsWithChildren`
2. The Row component should return the children inside a div with the following style

```css
.row {
  display: flex;
  flex-direction: flex-row;
}
```

It should be something like this

```tsx
function Row(props: PropsWithChildren){
  return <div>{props.children}</div>;
}
```

## Create a Col component

3. Create a Col component. It should have the following style

```css
.row {
  display: flex;
  flex-direction: flex-column;
}
```

# Problem 2

## Create an interface called note

It should have a title which is a string
It should have a value which is also a string.

## Create a component called NoteEditor

It should return html similar to the following

```tsx
<Col>
  <Row>
    <h4>Name</h4>
    <input/>
  </Row>
  <Row>
    <h4>Body</h4>
    <input/>
  </Row>
</Col>
```

## Inside NoteEditor make state

```tsx
const [state, setState] = useState<Note>();
```

## Connect the state to the inputs.

Set the value and onChange event handlers on inputs to update the state.

# Problem 3

## Create an interface called `NoteEditorProps`

```tsx
interface NoteEditorProps {
  value: Note;
  onChange(note: Note): void;
}
```

Remove the state from your note component and replace it with props

## Add state to App

1. In your app component add the following line

```tsx
const [notes, setNotes] = useState<Note[]>([]);
```

2. Create a `<button/>` that adds an additional note to the array when clicked.s

3. Add the following to the html part of your component

```tsx
{notes.map((note, index) => <Note key={`note-${id}`} {/* Set up the note props here */} />)}
```
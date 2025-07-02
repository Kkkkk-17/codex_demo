export const View = (props: any) => <div {...props} />
export const Input = ({ onInput, ...rest }: any) => (
  <input
    {...rest}
    onInput={e => onInput && onInput({ detail: { value: (e.target as HTMLInputElement).value } })}
  />
)
export const Button = (props: any) => <button {...props} />
export const Image = (props: any) => <img {...props} />
export const Navigator = (props: any) => <a {...props} />
export const Text = (props: any) => <span {...props} />

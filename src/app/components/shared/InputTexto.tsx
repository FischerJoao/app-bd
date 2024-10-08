'use client'
export interface InputTextoProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}  

export default function InputTexto(props: InputTextoProps) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-sm text-zinc-400">{props.label}</label>
            <input className="bg-zinc-900 rounded-md p-2 text-sm outline-none" {...props} />
        </div>
    )
}
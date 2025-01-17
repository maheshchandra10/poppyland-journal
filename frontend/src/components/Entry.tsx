import { SectionHeader } from "../pages/TodaysEntryPage"
import MarkdownComponent from "./Markdown"


interface EntryProps {
    content?: string
    onChange: Function
}

const EntryComponent: React.FunctionComponent<EntryProps> = ({ content, onChange }) => {
    return (
        <>
            <SectionHeader>Entry</SectionHeader>
            <MarkdownComponent view='edit' value={content} onChange={onChange} />
        </>
    )
}

export default EntryComponent
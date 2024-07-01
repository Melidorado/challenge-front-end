interface Props {
    tag: string;
    handleTags?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Tag ({tag, handleTags} : Props) {

    return(
        <button
            key={tag}
            className="bg-[#fcf2fa] px-[10px] rounded-full"
            onClick={handleTags}
            value={tag}>
            <p className="text-[#c11574] font-Montserrat-SemiBold text-[12px]">{tag}</p>
        </button>
    )
}

export default Tag;
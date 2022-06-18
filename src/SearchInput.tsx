import React, { useState } from 'react'

const SearchInput = (props: {
    setSearchData: React.Dispatch<React.SetStateAction<string>>
    setSelectedSearchType: React.Dispatch<React.SetStateAction<string>>
    selected: string
}) => {
    const [text, setText] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.setSearchData(text)
            props.setSelectedSearchType(props.selected)
        }
    }

    return (
        <input
            style={{ width: '300px' }}
            name="userInput"
            type="text"
            className="search-input"
            onChange={onChange}
            value={text}
            placeholder="검색해보세요."
            onKeyPress={handleKeyPress}
        />
    )
}

export default SearchInput

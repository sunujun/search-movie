import React, { useState } from 'react'

const SearchInput = (props: { setSearchTitle: React.Dispatch<React.SetStateAction<string>> }) => {
    const [text, setText] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            props.setSearchTitle(text)
        }
    }

    return (
        <input
            name="userInput"
            type="text"
            className="search-input"
            onChange={onChange}
            value={text}
            placeholder="작품 제목을 검색해보세요."
            onKeyPress={handleKeyPress}
        />
    )
}

export default SearchInput

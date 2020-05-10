import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

export default function SearchCity({ onCitySearch, onCityChange }) {
    return (
        <div className="search">
            <form onSubmit={onCitySearch}>
                <TextField
                    label="Input City Name"
                    onChange={onCityChange}
                />
                <IconButton
                    type="submit">
                    <SearchOutlinedIcon fontSize="small" />
                </IconButton>
            </form>
        </div>
    )
}


import React from 'react'
import {Slider, SliderProps} from '@mui/material'


const SuperRange: React.FC<SliderProps> = (props) => {

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: 'primary',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-thumb': {
                    backgroundColor: 'white',
                    border: '2px solid #00CC22',
                    position: 'relative'
                },

                 }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

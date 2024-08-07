import { filterItems } from '@/data';
import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Filters = ({ filtersVisible }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleOptionChange = (value) => {
        setSelectedOptions((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const clearSelection = () => {
        setSelectedOptions([]);
    };

    const selectAll = () => {
        setSelectedOptions(filterItems[0].options.map(option => option.value));
    };


    return (
        <section className={filtersVisible ? "filters-section-show" : "filters-section-hide"}>
            <div className="filter-content">
                <label className="custom-checkbox">
                    <input type="checkbox" style={{ width: '23px' }} />
                    <span className="checkbox-label">Customizable</span>
                </label>
                <hr className="separator" />
                {filterItems.map((filter, index) => (
                    <div key={index} className="dropdown">
                        <div className='filter-title' onClick={() => toggleDropdown(index)} >
                            <span>
                                {filter.title}
                            </span>
                            <FiChevronDown className="arrow" />
                        </div>
                        {openDropdown === index && (
                            <div className="dropdownContent">
                                <span onClick={selectAll} className='select-all'>Select All</span>
                                <div className="options">
                                    <span onClick={clearSelection} className="select-remove">
                                        Unselect All
                                    </span>
                                    {filter.options.map(({ label, value }) => (
                                        <div className="option" key={value}>
                                            <input
                                                type="checkbox"
                                                id={value}
                                                checked={selectedOptions.includes(value)}
                                                onChange={() => handleOptionChange(value)}
                                            />
                                            <label htmlFor={value}>{label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        <hr className="separator" style={{marginTop:'20px'}} />
                    </div>

                ))}
            </div>
        </section>
    );
}

export default Filters;

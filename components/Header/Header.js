import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import Fillters from './Fillters';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('recommended');
  const [filtersVisible, setFiltersVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownVisible(false); // Close dropdown after selecting an option
  };
  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  return (
    <>
      <section className="filter-header">
        <div className="header-content">
          <span className="items-number">3453 ITEMS</span>
          <div className="toggle-filters" onClick={toggleFilters}>
            <IoIosArrowBack size={20} />
            <span>{filtersVisible ? 'Hide Filters' : 'Show Filters'}</span>
          </div>
          <div className="recommended" onClick={toggleDropdown}>
            <span>Recommended</span>
            <IoIosArrowDown size={20} />
          </div>
          {dropdownVisible && (
            <div className="dropdown-menu">
              <ul>
                {['recommended', 'Newest first', 'popular', 'Price: high to low', 'Price: low to high'].map(option => (
                  <li
                    key={option}
                    className={`dropdown-option ${selectedOption === option ? 'selected' : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {selectedOption === option && <FaCheck className="check-icon" />} {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
      <div className="parent-container">
      <Fillters filtersVisible={filtersVisible} />
      <Products filtersVisible={filtersVisible}/>
      
      </div>
    </>
  );
}

export default Header;

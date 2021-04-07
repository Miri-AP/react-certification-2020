import React, { useState } from 'react';
import {
  Header,
  HeaderWrapper,
  Menu,
  Search,
  HeaderToggleWrapper,
  HeaderToggle,
  HeaderToggleLabel,
  LoginMenu,
} from './Header.styles';
import { useHistory } from '../../utils/hooks/useHistory';
import MenuIcon from './img/icon_menu.png';
import LoginIcon from './img/icon_login.png';

function HeaderMenu({ doSearch }) {
  const [searchKeyword, setSearchKeyword] = useState('wizeline');
  const { history, setHistoryVal } = useHistory('');

  const handleSearch = (ev) => {
    if (/Enter|Blur/i.test(ev.key) && searchKeyword !== history) {
      setHistoryVal(searchKeyword);
      doSearch(searchKeyword);
    }
  };

  return (
    <Header data-testid="yt-header">
      <HeaderWrapper>
        <Menu img={MenuIcon} />
        <Search
          type="text"
          id="name"
          value={searchKeyword}
          placeholder="Search..."
          onChange={({ target }) => setSearchKeyword(target.value)}
          onBlur={() => handleSearch({ key: 'Blur' })}
          onKeyDown={handleSearch}
        />
      </HeaderWrapper>
      <HeaderWrapper>
        <HeaderToggleWrapper>
          <HeaderToggle type="checkbox" name="darkMode" id="darkMode" />
          <HeaderToggleLabel htmlFor="darkMode">Dark mode</HeaderToggleLabel>
        </HeaderToggleWrapper>
        <LoginMenu img={LoginIcon} />
      </HeaderWrapper>
    </Header>
  );
}

export default HeaderMenu;

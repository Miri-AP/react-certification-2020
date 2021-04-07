import React from 'react';
import { screen, cleanup, render, fireEvent } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import HeaderMenu from '../components/Header';
import { useHistory } from '../utils/hooks/useHistory';

afterEach(() => {
  cleanup();
});

const doSearch = jest.fn();

it('Should render Header', () => {
  const header = render(<HeaderMenu />);
  const headerComponent = screen.getByTestId('yt-header');
  expect(headerComponent).toBeInTheDocument();
  expect(headerComponent).toContainHTML('Dark mode');
  expect(headerComponent).toContainHTML('input');
  expect(header).toMatchSnapshot();
});

it('Toggle Header Dark mode', () => {
  render(<HeaderMenu />);

  const switchInput = screen.getByLabelText('Dark mode', { type: 'checkbox' });
  expect(switchInput).toBeInTheDocument();
  fireEvent(
    switchInput,
    new MouseEvent('click', {
      checked: true,
    })
  );
  expect(switchInput.checked).toBe(true);
});

test('Search History Hook', () => {
  const { result } = renderHook(() => useHistory());
  expect(result.current.history).toBe('');
  expect(typeof result.current.setHistoryVal).toBe('function');
});

it('Search value change', () => {
  render(<HeaderMenu doSearch={doSearch} />);

  const SearchInput = screen.getByPlaceholderText('Search...');
  expect(SearchInput).toBeInTheDocument();
  SearchInput.focus();
  fireEvent.change(SearchInput, { target: { value: 'wizeline' } });
  expect(SearchInput.value).toBe('wizeline');

  fireEvent.keyDown(SearchInput, { key: 'Enter', code: 'Enter' });
  setTimeout(() => {
    expect(doSearch).toHaveBeenCalledWith('wizeline');
  }, 10);

  fireEvent.blur(SearchInput, { key: 'Enter', code: 'Enter' });
  setTimeout(() => {
    expect(doSearch).toHaveBeenCalledWith('wizeline');
  }, 10);
});

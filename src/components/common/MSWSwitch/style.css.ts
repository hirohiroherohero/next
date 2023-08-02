import { style } from '@vanilla-extract/css';

export const MSWSwitchButton = style({
  border: '2px solid #3182f6',
  position: 'fixed',
  top: '10px',
  right: '10px',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  boxShadow: '0 2px 4px black',
  backgroundColor: '#FFFFFF',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: '3',
  color: '#3182f6',
  cursor: 'pointer',

  selectors: {
    '&.on': {
      backgroundColor: '#3182f6',
      color: '#FFFFFF',
    },
  },
});

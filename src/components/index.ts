import { QTooltipProps } from 'quasar';

const jumpUp = 'jump-up';
const jumpDown = 'jump-down';
const jumpLeft = 'jump-left';
const jumpRight = 'jump-right';

export const tooltipJumpUp: QTooltipProps = {
  anchor: 'top middle',
  self: 'bottom middle',
  transitionShow: jumpUp,
  transitionHide: jumpDown
};
export const tooltipJumpDown: QTooltipProps = {};
export const tooltipJumpLeft: QTooltipProps = {
  anchor: 'center left',
  self: 'center right',
  transitionShow: jumpLeft,
  transitionHide: jumpRight
};
export const tooltipJumpRight: QTooltipProps = {
  anchor: 'center right',
  self: 'center left',
  transitionShow: jumpRight,
  transitionHide: jumpLeft
};

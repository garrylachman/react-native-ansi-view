import type { TextStyle } from 'react-native';
import type Anser from 'anser';
import merge from 'lodash/fp/merge';
import flow from 'lodash/fp/flow';

export type ApplyStyleProps = {
  style: TextStyle;
  item: Anser.AnserJsonEntry;
};

export const applyColor = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.fg) {
    return merge(props, {
      style: {
        color: `rgb(${item.fg})`,
      },
    });
  }
  return props;
};

export const applyBackground = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.bg) {
    return merge(props, {
      style: {
        backgroundColor: `rgb(${item.bg})`,
      },
    });
  }
  return props;
};

export const applyBold = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.decorations && item.decorations.includes('bold')) {
    return merge(props, {
      style: {
        fontWeight: 'bold',
      },
    });
  }
  return props;
};

export const applyDim = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.decorations && item.decorations.includes('dim')) {
    return merge(props, {
      style: {
        opacity: 0.5,
      },
    });
  }
  return props;
};

export const applyUnderline = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.decorations && item.decorations.includes('underline')) {
    return merge(props, {
      style: {
        textDecorationLine: 'underline',
      },
    });
  }
  return props;
};

export const applyItalic = (props: ApplyStyleProps): ApplyStyleProps => {
  const { item } = props;
  if (item.decorations && item.decorations.includes('italic')) {
    return merge(props, {
      style: {
        fontStyle: 'italic',
      },
    });
  }
  return props;
};

export const applyAll = flow([
  applyColor,
  applyBackground,
  applyBold,
  applyDim,
  applyUnderline,
  applyItalic,
]);

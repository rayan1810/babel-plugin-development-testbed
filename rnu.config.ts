// import type React from 'react';
// import type { View } from 'react-native';
import { createConfig } from 'react-native-ustyle';
export const CONFIG = createConfig({
  aliases: {
    p: 'padding',
    m: 'margin',
    t: 'top',
    b: 'bottom',
    l: 'left',
    r: 'right',
    h: 'height',
    w: 'width',
    bg: 'backgroundColor',
    c: 'color',
    mx: 'marginHorizontal',
    bc: 'borderColor',
    bw: 'borderWidth',
    mr: 'marginRight',
    roundedTop: ['borderTopLeftRadius', 'borderTopRightRadius'],
    roundedBottom: ['borderBottomLeftRadius', 'borderBottomRightRadius'],
    roundedLeft: ['borderTopLeftRadius', 'borderBottomLeftRadius'],
    roundedRight: ['borderTopRightRadius', 'borderBottomRightRadius'],
    font: ['fontWeight', 'fontSize', 'fontFamily'],
  },
  tokens: {
    global: {
      primary: '#0000FF',
      secondary: '#FFFF00',
    },
    space: {
      'px': 1,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 16,
      '5': 20,
      '6': 24,
      '7': 28,
    },
  },
  components: {
    Box: {
      tag: 'View',
      baseStyle: {
        padding: 8,
        backgroundColor: '$secondary',
      },
      variants: {
        variant: {
          primary: {
            backgroundColor: '$primary',
            borderRadius: 8,
          },
        },
      },
    },
    Random: {
      tag: 'View',
      baseStyle: {
        padding: 8,
        backgroundColor: '$secondary',
      },
      variants: {
        variant: {
          primary: {
            backgroundColor: '$primary',
            borderRadius: 8,
          },
        },
      },
    },
    Center: {
      tag: 'View',
      baseStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      // variants: {
      //   variant: {
      //     primary: {
      //       backgroundColor: '$primary',
      //       borderRadius: 8,
      //     },
      //   },
      // },
    },
    Heading: {
      tag: 'Text',
      baseStyle: {
        color: '$primary',
        fontSize: 24,
        fontWeight: 'bold',
      },
      variants: {
        variant: {
          primary: {
            backgroundColor: '$primary',
            borderRadius: 8,
          },
        },
      },
    },
  },
} as const);

type ConfigType = typeof CONFIG;

declare module 'react-native-ustyle' {
  interface ICustomConfig extends ConfigType {}
}

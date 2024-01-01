import { cva } from 'class-variance-authority'

/**
 * components: rg -o --no-filename '\.rt-[A-Z]\w+' ./ | sort | uniq
 * utils: rg -o --no-filename '\.rt-r(-?\w+)+' ./ | sort | uniq
 */

type R<T extends string> = Record<T, string>

const values = {
  display: [
    'none',
    'inline',
    'inline-block',
    'block',
    'flex',
    'inline-flex',
    'grid',
    'inline-grid',
  ] as const,
  positionEdge: ['auto', '0', '50%', '100%'] as const,
  direction: ['row', 'column', 'row-reverse', 'column-reverse'] as const,
  flow: ['row', 'column', 'dense', 'row-dense', 'column-dense'] as const,
  verticalAlign: ['start', 'center', 'end', 'baseline'] as const,
  align: ['start', 'center', 'end', 'baseline', 'stretch'] as const,
  justify: ['start', 'center', 'end', 'space-between'] as const,
  wrap: ['nowrap', 'wrap', 'wrap-reverse'] as const,
  weightHeight: [
    'auto',
    'min-content',
    'max-content',
    '50%',
    '100%',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ] as const,
  num_0_9: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const,
  num_0_1: ['0', '1'] as const,
  margin: [
    'auto',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '-1',
    '-2',
    '-3',
    '-4',
    '-5',
    '-6',
    '-7',
    '-8',
    '-9',
  ] as const,
}
const classEnum = <T extends string>(prefix: string, items: readonly T[]) =>
  items.reduce((acc, it) => {
    let s: string = it

    acc[it] = `${prefix}-${s}`
    return acc
  }, {} as Record<T, string>)

const utils = {
  display: classEnum('rt-r-display', values.display),
  direction: classEnum('rt-r-fd', values.direction),
  alignItems: classEnum('rt-r-ai', values.align),
  justify: classEnum('rt-r-jc', values.justify),
  wrap: classEnum('rt-r-fw', values.wrap),
  gap: classEnum('rt-r-gap', values.num_0_9),
  gapX: classEnum('rt-r-cg', values.num_0_9),
  gapY: classEnum('rt-r-rg', values.num_0_9),
  flow: classEnum('rt-r-gaf', values.flow),
  verticalAlign: classEnum('rt-r-va', values.verticalAlign),

  side: classEnum('rt-r-side', [
    'all',
    'x',
    'y',
    'top',
    'bottom',
    'left',
    'right',
  ]),
  clip: classEnum('rt-r-clip', ['border-box', 'padding-box']),

  margins: {
    m: classEnum('rt-r-m', values.margin),
    mx: classEnum('rt-r-mx', values.margin),
    my: classEnum('rt-r-my', values.margin),
    mt: classEnum('rt-r-mt', values.margin),
    mr: classEnum('rt-r-mr', values.margin),
    mb: classEnum('rt-r-mb', values.margin),
    ml: classEnum('rt-r-ml', values.margin),
  },

  layouts: {
    p: classEnum('rt-r-p', values.num_0_9),
    px: classEnum('rt-r-px', values.num_0_9),
    py: classEnum('rt-r-py', values.num_0_9),
    pt: classEnum('rt-r-pt', values.num_0_9),
    pr: classEnum('rt-r-pr', values.num_0_9),
    pb: classEnum('rt-r-pb', values.num_0_9),
    pl: classEnum('rt-r-pl', values.num_0_9),

    position: classEnum('rt-r-position', [
      'static',
      'relative',
      'absolute',
      'fixed',
      'sticky',
    ]),
    inset: classEnum('rt-r-inset', values.positionEdge),
    top: classEnum('rt-r-top', values.positionEdge),
    right: classEnum('rt-r-right', values.positionEdge),
    bottom: classEnum('rt-r-bottom', values.positionEdge),
    left: classEnum('rt-r-left', values.positionEdge),

    width: classEnum('rt-r-w', values.weightHeight),
    height: classEnum('rt-r-h', values.weightHeight),
    shrink: classEnum('rt-r-fs', values.num_0_1),
    grow: classEnum('rt-r-fg', values.num_0_1),
  },

  underline: classEnum('rt-underline', ['auto', 'hover', 'always']),
  weight: classEnum('rt-r-weight', ['light', 'regular', 'medium', 'bold']),
  // text align
  textAlign: classEnum('rt-r-ta', ['left', 'center', 'right']),
  // leading trim
  trim: classEnum('rt-r-lt', ['normal', 'start', 'end', 'both']),
}

const variants = {
  variant: classEnum('rt-variant', [
    'solid',
    'soft',
    'surface',
    'outline',
    'ghost',
  ]),
  size: {
    x2: classEnum('rt-r-size', ['1', '2']),
    x3: classEnum('rt-r-size', ['1', '2', '3']),
    x4: classEnum('rt-r-size', ['1', '2', '3', '4']),
    x5: classEnum('rt-r-size', ['1', '2', '3', '4', '5']),
    x9: classEnum('rt-r-size', ['1', '2', '3', '4', '5', '6', '7', '8', '9']),
  },

  highContrast: {
    true: 'rt-high-contrast',
  },
}
export const enum DataAccentColor {
  tomato = 'tomato',
  red = 'red',
  ruby = 'ruby',
  crimson = 'crimson',
  pink = 'pink',
  plum = 'plum',
  purple = 'purple',
  violet = 'violet',
  iris = 'iris',
  indigo = 'indigo',
  blue = 'blue',
  cyan = 'cyan',
  teal = 'teal',
  jade = 'jade',
  green = 'green',
  grass = 'grass',
  brown = 'brown',
  orange = 'orange',
  sky = 'sky',
  mint = 'mint',
  lime = 'lime',
  yellow = 'yellow',
  amber = 'amber',
  gold = 'gold',
  bronze = 'bronze',
  gray = 'gray',

  DEFAULT = DataAccentColor.indigo,
}
export const enum DataGrayColor {
  gray = 'gray',
  mauve = 'mauve',
  slate = 'slate',
  sage = 'sage',
  olive = 'olive',
  sand = 'sand',
  auto = 'auto',

  DEFAULT = DataGrayColor.auto,
}
export const enum DataPanelBackground {
  solid = 'solid',
  translucent = 'translucent',

  DEFAULT = DataPanelBackground.translucent,
}

export const enum DataRadius {
  none = 'none',
  small = 'small',
  medium = 'medium',
  large = 'large',
  full = 'full',

  DEFAULT = DataRadius.medium,
}
export const enum DataState {
  checked = 'checked',
  unchecked = 'unchecked',

  closed = 'closed',
  open = 'open',

  active = 'active',
  inactive = 'inactive',
}
export const enum DataOrientation {
  horizontal = 'horizontal',
  vertical = 'vertical',
}
export const enum DataScaling {
  p90 = '90%',
  p95 = '95%',
  p100 = '100%',
  p105 = '105%',
  p110 = '110%',

  DEFAULT = DataScaling.p100,
}
export const enum Keyframes {
  fadeIn = 'rt-fade-in',
  fadeOut = 'rt-fade-out',
  sideFromTop = 'rt-side-from-top',
  sideFromBottom = 'rt-side-from-bottom',
  sideToTop = 'rt-side-to-top',
  sideToBottom = 'rt-side-to-bottom',
  sideFromLeft = 'rt-side-from-left',
  sideFromRight = 'rt-side-from-right',
  sideToLeft = 'rt-side-to-left',
  sideToRight = 'rt-side-to-right',
}

export const enum ThemesClasses {
  radixThemes = 'radix-themes',
  light = 'light',
  dark = 'dark',

  DEFAULT = 'default',
}
export const enum Classes {
  AlertDialogContent = 'rt-AlertDialogContent',
  AlertDialogOverlay = 'rt-AlertDialogOverlay',
  AvatarFallback = 'rt-AvatarFallback',
  AvatarImage = 'rt-AvatarImage',
  AvatarRoot = 'rt-AvatarRoot',
  Badge = 'rt-Badge',
  BaseButton = 'rt-BaseButton',
  BaseMenuArrow = 'rt-BaseMenuArrow',
  BaseMenuCheckboxItem = 'rt-BaseMenuCheckboxItem',
  BaseMenuContent = 'rt-BaseMenuContent',
  BaseMenuSubContent = 'rt-BaseMenuSubContent',
  BaseMenuItem = 'rt-BaseMenuItem',
  BaseMenuItemIndicator = 'rt-BaseMenuItemIndicator',
  BaseMenuItemIndicatorIcon = 'rt-BaseMenuItemIndicatorIcon',
  BaseMenuLabel = 'rt-BaseMenuLabel',
  BaseMenuGroup = 'rt-BaseMenuGroup',
  ContextMenuGroup = 'rt-ContextMenuGroup',
  ContextMenuRadioGroup = 'rt-ContextMenuRadioGroup',
  BaseMenuRadioGroup = 'rt-BaseMenuRadioGroup',
  BaseMenuRadioItem = 'rt-BaseMenuRadioItem',
  BaseMenuSeparator = 'rt-BaseMenuSeparator',
  BaseMenuShortcut = 'rt-BaseMenuShortcut',
  BaseMenuSubTrigger = 'rt-BaseMenuSubTrigger',
  BaseMenuSubTriggerIcon = 'rt-BaseMenuSubTriggerIcon',
  BaseMenuViewport = 'rt-BaseMenuViewport',
  DropdownMenuViewport = 'rt-DropdownMenuViewport',
  DropdownMenuLabel = 'rt-DropdownMenuLabel',
  DropdownMenuItem = 'rt-DropdownMenuItem',
  DropdownMenuShortcut = 'rt-DropdownMenuShortcut',
  DropdownMenuSubTrigger = 'rt-DropdownMenuSubTrigger',
  DropdownMenuSubContent = 'rt-DropdownMenuSubContent',
  DropdownMenuSeparator = 'rt-DropdownMenuSeparator',
  DropdownMenuRadioGroup = 'rt-DropdownMenuRadioGroup',
  DropdownMenuItemIndicator = 'rt-DropdownMenuItemIndicator',
  DropdownMenuCheckboxItem = 'rt-DropdownMenuCheckboxItem',
  DropdownMenuRadioItem = 'rt-DropdownMenuRadioItem',
  DropdownMenuGroup = 'rt-DropdownMenuGroup',
  Blockquote = 'rt-Blockquote',
  Box = 'rt-Box',
  Button = 'rt-Button',
  CalloutIcon = 'rt-CalloutIcon',
  CalloutRoot = 'rt-CalloutRoot',
  Card = 'rt-Card',
  CardInner = 'rt-CardInner',
  CheckboxButton = 'rt-CheckboxButton',
  CheckboxIndicator = 'rt-CheckboxIndicator',
  CheckboxIndicatorIcon = 'rt-CheckboxIndicatorIcon',
  CheckboxRoot = 'rt-CheckboxRoot',
  Code = 'rt-Code',
  Container = 'rt-Container',
  ContainerInner = 'rt-ContainerInner',
  ContextMenuContent = 'rt-ContextMenuContent',
  ContextMenuSubContent = 'rt-ContextMenuSubContent',
  ContextMenuSeparator = 'rt-ContextMenuSeparator',
  ContextMenuLabel = 'rt-ContextMenuLabel',
  ContextMenuItem = 'rt-ContextMenuItem',
  ContextMenuSubTrigger = 'rt-ContextMenuSubTrigger',
  ContextMenuSubTriggerIcon = 'rt-ContextMenuSubTriggerIcon',
  ContextMenuViewport = 'rt-ContextMenuViewport',
  ContextMenuCheckboxItem = 'rt-ContextMenuCheckboxItem',
  ContextMenuRadioItem = 'rt-ContextMenuRadioItem',
  ContextMenuShortcut = 'rt-ContextMenuShortcut',
  ContextMenuItemIndicator = 'rt-ContextMenuItemIndicator',
  ContextMenuItemIndicatorIcon = 'rt-ContextMenuItemIndicatorIcon',
  DialogContent = 'rt-DialogContent',
  DialogOverlay = 'rt-DialogOverlay',
  DropdownMenuContent = 'rt-DropdownMenuContent',
  Em = 'rt-Em',
  Flex = 'rt-Flex',
  Grid = 'rt-Grid',
  Heading = 'rt-Heading',
  HoverCardContent = 'rt-HoverCardContent',
  IconButton = 'rt-IconButton',
  Inset = 'rt-Inset',
  Kbd = 'rt-Kbd',
  Link = 'rt-Link',
  HoverCardTrigger = 'rt-HoverCardTrigger',
  PopoverContent = 'rt-PopoverContent',
  PopperContent = 'rt-PopperContent',
  Quote = 'rt-Quote',
  RadioGroupButton = 'rt-RadioGroupButton',
  RadioGroupIndicator = 'rt-RadioGroupIndicator',
  RadioGroupItem = 'rt-RadioGroupItem',
  RadioGroupRoot = 'rt-RadioGroupRoot',
  ScrollAreaRoot = 'rt-ScrollAreaRoot',
  ScrollAreaScrollbar = 'rt-ScrollAreaScrollbar',
  ScrollAreaThumb = 'rt-ScrollAreaThumb',
  ScrollAreaCorner = 'rt-ScrollAreaCorner',
  ScrollAreaViewport = 'rt-ScrollAreaViewport',
  ScrollAreaViewportFocusRing = 'rt-ScrollAreaViewportFocusRing',
  Section = 'rt-Section',
  SelectContent = 'rt-SelectContent',
  SelectIcon = 'rt-SelectIcon',
  SelectItem = 'rt-SelectItem',
  SelectGroup = 'rt-SelectGroup',
  SelectItemIndicator = 'rt-SelectItemIndicator',
  SelectItemIndicatorIcon = 'rt-SelectItemIndicatorIcon',
  SelectLabel = 'rt-SelectLabel',
  SelectSeparator = 'rt-SelectSeparator',
  SelectTrigger = 'rt-SelectTrigger',
  SelectTriggerInner = 'rt-SelectTriggerInner',
  SelectViewport = 'rt-SelectViewport',
  Separator = 'rt-Separator',
  SliderRange = 'rt-SliderRange',
  SliderRoot = 'rt-SliderRoot',
  SliderThumb = 'rt-SliderThumb',
  SliderTrack = 'rt-SliderTrack',
  Strong = 'rt-Strong',
  SwitchButton = 'rt-SwitchButton',
  SwitchRoot = 'rt-SwitchRoot',
  SwitchThumb = 'rt-SwitchThumb',
  TableBody = 'rt-TableBody',
  TableCell = 'rt-TableCell',
  TableColumnHeaderCell = 'rt-TableColumnHeaderCell',
  TableHeader = 'rt-TableHeader',
  TableRoot = 'rt-TableRoot',
  TableRootTable = 'rt-TableRootTable',
  TableRow = 'rt-TableRow',
  TableRowHeaderCell = 'rt-TableRowHeaderCell',
  TabsContent = 'rt-TabsContent',
  TabsRoot = 'rt-TabsRoot',
  TabsList = 'rt-TabsList',
  TabsTrigger = 'rt-TabsTrigger',
  TabsTriggerInner = 'rt-TabsTriggerInner',
  TabsTriggerInnerHidden = 'rt-TabsTriggerInnerHidden',
  Text = 'rt-Text',
  TextAreaChrome = 'rt-TextAreaChrome',
  TextAreaInput = 'rt-TextAreaInput',
  TextAreaRoot = 'rt-TextAreaRoot',
  TextFieldChrome = 'rt-TextFieldChrome',
  TextFieldInput = 'rt-TextFieldInput',
  TextFieldRoot = 'rt-TextFieldRoot',
  TextFieldSlot = 'rt-TextFieldSlot',
  ThemePanelRadioCard = 'rt-ThemePanelRadioCard',
  ThemePanelRadioCardInput = 'rt-ThemePanelRadioCardInput',
  ThemePanelShortcut = 'rt-ThemePanelShortcut',
  ThemePanelSwatch = 'rt-ThemePanelSwatch',
  ThemePanelSwatchInput = 'rt-ThemePanelSwatchInput',
  TooltipArrow = 'rt-TooltipArrow',
  TooltipContent = 'rt-TooltipContent',
  TooltipText = 'rt-TooltipText',
}
// -----------------------------------------------------
// Layout
// -----------------------------------------------------
export const box = cva([Classes.Box], {
  variants: {
    display: utils.display as R<'none' | 'inline' | 'inline-block' | 'block'>,

    ...utils.margins,
    ...utils.layouts,
  },
})

export const flex = cva([Classes.Flex], {
  defaultVariants: { display: 'flex' },
  variants: {
    display: utils.display as R<'none' | 'inline-flex' | 'flex'>,
    direction: utils.direction,
    align: utils.alignItems,
    justify: utils.justify,
    wrap: utils.wrap,
    gap: utils.gap,

    ...utils.layouts,
    ...utils.margins,
  },
})

export const grid = cva([Classes.Grid], {
  variants: {
    display: utils.display as R<'none' | 'inline-grid' | 'grid'>,
    flow: utils.flow,
    align: utils.alignItems,
    justify: utils.justify,
    gap: utils.gap,
    gapX: utils.gapX,
    gapY: utils.gapY,

    ...utils.layouts,
    ...utils.margins,
  },
})
export const container = {
  root: cva([Classes.Container], {
    defaultVariants: { size: '4' },
    variants: {
      size: variants.size.x4,
      display: utils.display as R<'none' | 'block'>,

      ...utils.layouts,
      ...utils.margins,
    },
  }),
  inner: cva([Classes.ContainerInner]),
}

export const section = cva([Classes.Section], {
  defaultVariants: { size: '3' },
  variants: {
    size: variants.size.x3,
    display: utils.display as R<'none' | 'block'>,

    ...utils.layouts,
    ...utils.margins,
  },
})

// -----------------------------------------------------
// Typography
// -----------------------------------------------------

export const text = cva([Classes.Text], {
  variants: {
    size: variants.size.x9,

    weight: utils.weight,
    align: utils.textAlign,
    trim: utils.trim,

    highContrast: variants.highContrast,

    ...utils.margins,
  },
})

export const heading = cva([Classes.Heading], {
  defaultVariants: { size: '6', weight: 'bold' },
  variants: {
    size: variants.size.x9,

    weight: utils.weight,
    align: utils.textAlign,
    trim: utils.trim,

    highContrast: variants.highContrast,
    ...utils.margins,
  },
})

export const blockquote = cva([Classes.Blockquote], {
  variants: {
    size: variants.size.x9,
    weight: utils.weight,
    highContrast: variants.highContrast,
  },
})
export const code = cva([Classes.Code], {
  defaultVariants: { variant: 'soft' },
  variants: {
    size: variants.size.x9,
    variant: variants.variant as R<'solid' | 'soft' | 'outline' | 'ghost'>,
    weight: utils.weight,
    highContrast: variants.highContrast,
  },
})
export const em = () => Classes.Em
export const kbd = cva([Classes.Kbd], {
  variants: {
    size: variants.size.x9,
  },
})

export const link = cva(['rt-reset', Classes.Link], {
  defaultVariants: {
    underline: 'auto',
  },
  variants: {
    size: variants.size.x9,
    weight: utils.weight,
    trim: utils.trim,
    underline: utils.underline,
    highContrast: variants.highContrast,
  },
})
export const quote = () => Classes.Quote
export const strong = () => Classes.Strong

// -----------------------------------------------------
// Components
// -----------------------------------------------------
export const alertDialog = {
  overlay: cva([Classes.DialogOverlay, Classes.AlertDialogOverlay]),
  content: cva([Classes.DialogContent, Classes.AlertDialogContent], {
    defaultVariants: { size: '3' },
    variants: {
      size: variants.size.x4,
    },
  }),
}

export const avatar = {
  root: cva([Classes.AvatarRoot], {
    defaultVariants: { variant: 'soft', size: '3' },
    variants: {
      size: variants.size.x9,
      variant: variants.variant as R<'solid' | 'soft'>,
      highContrast: variants.highContrast,
      ...utils.margins,
    },
  }),
  image: () => Classes.AvatarImage,
  fallback: cva([Classes.AvatarFallback], {
    variants: {
      letter: {
        one: 'rt-one-letter',
        tow: 'rt-two-letters',
      },
    },
  }),
}

export const badge = cva([Classes.Badge], {
  defaultVariants: { size: '1', variant: 'soft' },
  variants: {
    size: variants.size.x2,
    variant: variants.variant as R<'solid' | 'soft' | 'surface' | 'outline'>,
    highContrast: variants.highContrast,
  },
})

export const button = cva(['rt-reset', Classes.BaseButton, Classes.Button], {
  defaultVariants: { variant: 'solid', size: '1' },
  variants: {
    size: variants.size.x2,
    variant: variants.variant as R<
      'solid' | 'soft' | 'surface' | 'outline' | 'ghost'
    >,
    highContrast: variants.highContrast,
  },
})

export const callout = cva([Classes.CalloutRoot], {
  defaultVariants: { size: '2', variant: 'soft' },
  variants: {
    size: variants.size.x3,
    variant: variants.variant as R<'soft' | 'surface' | 'outline'>,
    highContrast: variants.highContrast,
  },
})

export const card = cva([Classes.Card], {
  defaultVariants: { size: '1', variant: 'surface' },
  variants: {
    size: variants.size.x5,
    variant: variants.variant as R<'surface' | 'ghost'>,
    highContrast: variants.highContrast,
  },
})

export const checkbox = {
  root: cva([Classes.CheckboxRoot], {
    defaultVariants: {
      size: '2',
    },
    variants: {
      size: variants.size.x3,
      ...utils.margins,
    },
  }),

  button: cva(['rt-reset', Classes.CheckboxButton], {
    defaultVariants: {
      variant: 'surface',
    },
    variants: {
      variant: variants.variant as R<'surface' | 'soft'>,
      highContrast: variants.highContrast,
    },
  }),

  indicator: Classes.CheckboxIndicator,
  indicatorIcon: Classes.CheckboxIndicatorIcon,
}

export const contextMenu = {
  root: cva([]),
  trigger: cva([]),
  content: cva(
    [
      Classes.PopperContent,
      Classes.BaseMenuContent,
      Classes.ContextMenuContent,
    ],
    {
      variants: {
        size: variants.size.x2,
        variant: variants.variant as R<'solid' | 'soft'>,
        highContrast: variants.highContrast,
      },
    },
  ),
  label: cva([Classes.BaseMenuLabel, Classes.ContextMenuLabel]),
  item: cva(['rt-reset', Classes.BaseMenuItem, Classes.ContextMenuItem]),

  group: cva([Classes.BaseMenuGroup, Classes.ContextMenuGroup]),
  radioGroup: cva([Classes.BaseMenuRadioGroup, Classes.ContextMenuRadioGroup]),
  radioItem: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuRadioItem,
    Classes.ContextMenuItem,
    Classes.ContextMenuRadioItem,
  ]),

  checkboxItem: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuCheckboxItem,
    Classes.ContextMenuItem,
    Classes.ContextMenuCheckboxItem,
  ]),

  itemIndicator: cva([
    Classes.BaseMenuItemIndicator,
    Classes.ContextMenuItemIndicator,
  ]),
  itemIndicatorIcon: cva([
    Classes.BaseMenuItemIndicatorIcon,
    Classes.ContextMenuItemIndicatorIcon,
  ]),
  itemShortcut: cva([Classes.BaseMenuShortcut, Classes.ContextMenuShortcut]),

  sub: cva([]),
  subTrigger: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuSubTrigger,
    Classes.ContextMenuItem,
    Classes.ContextMenuSubTrigger,
  ]),
  subTriggerShortcut: cva([
    Classes.BaseMenuShortcut,
    Classes.ContextMenuShortcut,
  ]),
  subTriggerShortcutIcon: cva([
    Classes.BaseMenuSubTriggerIcon,
    Classes.ContextMenuSubTriggerIcon,
  ]),

  subContent: cva(
    [
      Classes.PopperContent,
      Classes.BaseMenuContent,
      Classes.BaseMenuSubContent,
      Classes.ContextMenuContent,
      Classes.ContextMenuSubContent,
    ],
    {
      defaultVariants: {
        size: '2',
        variant: 'solid',
      },
      variants: {
        size: variants.size.x2,
        variant: variants.variant as R<'solid' | 'soft'>,
        highContrast: variants.highContrast,
      },
    },
  ),
  separator: cva([Classes.BaseMenuSeparator, Classes.ContextMenuSeparator]),
}
export const dialog = {
  root: cva([]),
  trigger: cva([]),
  overlay: cva([Classes.DialogOverlay]),
  content: cva([Classes.DialogContent], {
    variants: {
      size: variants.size.x4,
    },
  }),
  title: cva([]),
  description: cva([]),
  close: cva([]),
}
export const dropdownMenuContent = {
  root: cva([]),
  trigger: cva([]),
  content: cva(
    [
      Classes.PopperContent,
      Classes.BaseMenuContent,
      Classes.DropdownMenuContent,
    ],
    {
      defaultVariants: {
        size: '2',
        variant: 'solid',
      },
      variants: {
        size: variants.size.x2,
        variant: variants.variant as R<'solid' | 'soft'>,
        highContrast: variants.highContrast,
      },
    },
  ),
  contentViewport: cva([
    Classes.BaseMenuViewport,
    Classes.DropdownMenuViewport,
  ]),

  label: cva([Classes.BaseMenuLabel, Classes.DropdownMenuLabel]),
  item: cva(['rt-reset', Classes.BaseMenuItem, Classes.DropdownMenuItem]),
  itemShortcut: cva([Classes.BaseMenuShortcut, Classes.DropdownMenuShortcut]),

  group: cva([Classes.BaseMenuGroup, Classes.DropdownMenuGroup]),
  radioGroup: cva([Classes.BaseMenuRadioGroup, Classes.DropdownMenuRadioGroup]),
  radioItem: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuRadioItem,
    Classes.DropdownMenuItem,
    Classes.DropdownMenuRadioItem,
  ]),
  checkboxItem: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuCheckboxItem,
    Classes.DropdownMenuItem,
    Classes.DropdownMenuCheckboxItem,
  ]),
  itemIndicator: cva([
    Classes.BaseMenuItemIndicator,
    Classes.DropdownMenuItemIndicator,
  ]),
  itemShortcutIcon: cva([
    Classes.BaseMenuShortcut,
    Classes.DropdownMenuShortcut,
  ]),
  sub: cva([]),
  subTrigger: cva([
    Classes.BaseMenuItem,
    Classes.BaseMenuSubTrigger,
    Classes.DropdownMenuItem,
    Classes.DropdownMenuSubTrigger,
  ]),
  subContent: cva(
    [
      Classes.PopperContent,
      Classes.BaseMenuContent,
      Classes.BaseMenuSubContent,
      Classes.DropdownMenuContent,
      Classes.DropdownMenuSubContent,
    ],
    {
      defaultVariants: { size: '2', variant: 'solid' },
      variants: {
        size: variants.size.x2,
        variant: variants.variant as R<'solid' | 'soft'>,
        highContrast: variants.highContrast,
      },
    },
  ),
  separator: cva([Classes.BaseMenuSeparator, Classes.DropdownMenuSeparator]),
}

export const hoverCard = {
  root: cva([]),
  trigger: cva([Classes.HoverCardTrigger]),
  content: cva([Classes.PopperContent, Classes.HoverCardContent], {
    defaultVariants: { size: '2' },
    variants: {
      size: variants.size.x3,
    },
  }),
}

export const iconButton = cva(
  ['rt-reset', Classes.BaseButton, Classes.IconButton],
  {
    defaultVariants: { size: '2', variant: 'solid' },
    variants: {
      variant: variants.variant as R<
        'solid' | 'soft' | 'surface' | 'outline' | 'ghost'
      >,
      size: variants.size.x4,
    },
  },
)

export const inset = cva([Classes.Inset], {
  defaultVariants: { side: 'all', clip: 'border-box' },
  variants: {
    side: utils.side,
    clip: utils.clip,
    p: classEnum('rt-r-p', ['current', '0']),
    px: classEnum('rt-r-px', ['current', '0']),
    py: classEnum('rt-r-py', ['current', '0']),
    pt: classEnum('rt-r-pt', ['current', '0']),
    pr: classEnum('rt-r-pr', ['current', '0']),
    pb: classEnum('rt-r-pb', ['current', '0']),
    pl: classEnum('rt-r-pl', ['current', '0']),
    ...utils.margins,
  },
})

export const popover = {
  root: cva([]),

  content: cva([Classes.PopperContent, Classes.PopoverContent], {
    defaultVariants: { size: '2' },
    variants: {
      size: variants.size.x4,
    },
  }),
  trigger: cva([]),
  close: cva([]),
}
export const radioGroup = {
  root: cva([Classes.RadioGroupRoot], {
    defaultVariants: {
      size: '2',
      variant: 'surface',
    },
    variants: {
      size: variants.size.x3,
      variant: variants.variant as R<'surface' | 'soft'>,
      highContrast: variants.highContrast,
      ...utils.margins,
    },
  }),
  item: cva([Classes.RadioGroupItem]),
  itemButton: cva(['rt-reset', Classes.RadioGroupButton]),
  itemIndicator: cva([Classes.RadioGroupIndicator]),
}

export const scrollArea = {
  root: cva([Classes.ScrollAreaRoot], {
    variants: {
      ...utils.margins,
    },
  }),

  viewport: cva([Classes.ScrollAreaViewport]),
  viewportFocusRing: cva([Classes.ScrollAreaViewportFocusRing]),
  scrollbar: cva([Classes.ScrollAreaScrollbar], {
    defaultVariants: { size: '1' },
    variants: {
      size: variants.size.x3,
    },
  }),
  thumb: cva([Classes.ScrollAreaThumb]),
  corner: cva([Classes.ScrollAreaCorner]),
}
export const select = {
  root: cva([]),
  trigger: cva(['rt-reset', Classes.SelectTrigger], {
    defaultVariants: { size: '2', variant: 'surface' },
    variants: {
      variant: variants.variant as R<'surface' | 'soft' | 'ghost'>,
      size: variants.size.x3,

      ...utils.margins,
    },
  }),
  triggerInner: cva([Classes.SelectTriggerInner]),
  triggerIcon: cva([Classes.SelectIcon]),
  popover: {
    content: cva([Classes.SelectContent], {
      defaultVariants: { size: '2', variant: 'solid' },
      // compoundVariants: [
      //   {
      //     position: "popper",
      //     class: cls.PopperContent,
      //   },
      // ],
      variants: {
        size: variants.size.x3,
        variant: variants.variant as R<'solid' | 'soft'>,
        highContrast: variants.highContrast,
        position: {
          popper: Classes.PopperContent,
        },
      },
    }),
    viewport: cva([Classes.SelectViewport]),
    item: cva([Classes.SelectItem]),
    itemIndicator: cva([Classes.SelectItemIndicator]),
    itemIndicatorIcon: cva([Classes.SelectItemIndicatorIcon]),
    label: cva([Classes.SelectLabel]),
    separator: cva([Classes.SelectSeparator]),
    group: cva([Classes.SelectGroup]),
  },
}

export const separator = cva([Classes.Separator], {
  defaultVariants: { size: '1' },
  variants: {
    size: variants.size.x4,
    ...utils.margins,
  },
})
export const slider = {
  root: cva([Classes.SliderRoot], {
    defaultVariants: { size: '2', variant: 'surface' },
    variants: {
      size: variants.size.x3,
      variant: variants.variant as R<'surface' | 'soft'>,
      highContrast: variants.highContrast,
    },
  }),
  track: cva([Classes.SliderTrack]),
  range: cva([Classes.SliderRange], {
    variants: {
      highContrast: variants.highContrast,
    },
  }),

  thumb: cva([Classes.SliderThumb]),
}
export const switcher = {
  root: cva([Classes.SwitchRoot], {
    defaultVariants: {
      size: '2',
      variant: 'surface',
    },
    variants: {
      variant: variants.variant as R<'surface' | 'soft'>,
      size: variants.size.x3,
      highContrast: variants.highContrast,
      ...utils.margins,
    },
  }),

  button: cva(['rt-reset', Classes.SwitchButton], {
    variants: {
      highContrast: variants.highContrast,
    },
  }),
  thumb: cva([Classes.SwitchThumb], {
    variants: {
      highContrast: variants.highContrast,
    },
  }),
}

export const table = {
  root: cva([Classes.TableRoot], {
    defaultVariants: {
      variant: 'ghost',
      size: '2',
    },
    variants: {
      variant: variants.variant as R<'surface' | 'ghost'>,
      size: variants.size.x3,
      ...utils.margins,
    },
  }),
  rootTable: cva([Classes.TableRootTable]),
  header: cva([Classes.TableHeader]),
  body: cva([Classes.TableBody]),
  row: cva([Classes.TableRow], {
    variants: {
      align: utils.verticalAlign,
      // TODO
      // baseline: 'baseline',
      // start: 'top',
      // center: 'middle',
      // end: 'bottom',
    },
  }),
  cell: cva([]),
  columnHeaderCell: cva([Classes.TableColumnHeaderCell]),
  rowHeaderCell: cva([Classes.TableRowHeaderCell]),
}

export const tabs = {
  root: cva([Classes.TabsRoot], {
    variants: {
      ...utils.margins,
    },
  }),
  list: cva([Classes.TabsList], {
    defaultVariants: { size: '2' },
    variants: {
      size: variants.size.x2,
    },
  }),
  trigger: cva(['rt-reset', Classes.TabsTrigger]),
  triggerInner: cva([Classes.TabsTriggerInner]),
  triggerInnerHidden: cva([Classes.TabsTriggerInnerHidden]),
  content: cva([Classes.TabsContent]),
}
export const textArea = {
  root: cva([Classes.TextAreaRoot], {
    defaultVariants: { size: '2', variant: 'surface' },
    variants: {
      size: variants.size.x3,
      variant: variants.variant as R<'surface' | 'soft'>,
      ...utils.margins,
    },
  }),
  input: cva([Classes.TextAreaInput]),
  chrome: cva([Classes.TextAreaChrome]),
}

export const textField = {
  root: cva([Classes.TextFieldRoot], {
    variants: {
      ...utils.margins,
    },
  }),
  slot: cva([Classes.TextFieldSlot], {
    defaultVariants: { size: '2', variant: 'surface' },
    variants: {
      size: variants.size.x3,
      variant: variants.variant as R<'surface' | 'soft'>,
      gap: utils.gap,
      p: utils.layouts.p,
      px: utils.layouts.px,
      py: utils.layouts.py,
      pt: utils.layouts.pt,
      pr: utils.layouts.pr,
      pb: utils.layouts.pb,
      pl: utils.layouts.pl,
    },
  }),
  input: cva([Classes.TextFieldInput], {
    defaultVariants: { variant: 'surface', size: '2' },
    variants: {
      size: variants.size.x3,
      variant: variants.variant as R<'surface' | 'soft'>,
    },
  }),
  chrome: cva([Classes.TextFieldChrome]),
}

export const tooltip = {
  content: cva([Classes.TooltipContent]),
  text: cva([Classes.TooltipText]),
  arrow: cva([Classes.TooltipArrow]),
}

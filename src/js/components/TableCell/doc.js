import { describe, PropTypes } from 'react-desc';

export const doc = TableCell => {
  const DocumentedTableCell = describe(TableCell)
    .description('A cell of data in a table.')
    .usage(
      `import { TableCell } from 'grommet';
<TableCell />`,
    )
    .intrinsicElement('td');

  DocumentedTableCell.propTypes = {
    plain: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['fill'])])
      .description(
        `Whether default styling context should be removed. If plain = 'fill', 
        no pad will be applied, allowing content to fill the entirety of the 
        cell.`,
      )
      .defaultValue(false),
    scope: PropTypes.oneOf(['col', 'row'])
      .description(`For header cells, what scope the header is for.
        Typically, the cells in a TableHeader have 'col' scope and
        the primary cell in each row in the TableBody has 'row' scope.`),
    size: PropTypes.oneOfType([
      PropTypes.oneOf([
        'xxsmall',
        'xsmall',
        'small',
        'medium',
        'large',
        'xlarge',
        '1/2',
        '1/3',
        '2/3',
        '1/4',
        '2/4',
        '3/4',
      ]),
      PropTypes.string,
    ]).description(`What size the cell should be. Typically, this is not needed
      unless you are trying to align multiple tables.`),
    verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']).description(
      'How to align the contents vertically.',
    ),
    align: PropTypes.oneOfType([
      PropTypes.oneOf([
        'left',
        'right',
        'center',
        'justify',
        'inherit',
        'start',
        'end',
      ]),
      PropTypes.string,
    ]).description('How to align the body inside the Table.'),
  };

  return DocumentedTableCell;
};

export const themeDoc = {
  'table.body.align': {
    description: 'How to align the body inside the Table.',
    type: 'string',
    defaultValue: 'start',
  },
  'table.body.border': {
    description: 'The border side of the body.',
    type: 'string',
    defaultValue: undefined,
  },
  'table.body.extend': {
    description: 'Any additional style for Table body.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'table.body.pad': {
    description: 'The padding of the body.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }",
  },
  'table.footer.align': {
    description: 'How to align the footer inside the Table.',
    type: 'string',
    defaultValue: 'start',
  },
  'table.footer.border': {
    description: 'The border side of the footer.',
    type: 'string',
    defaultValue: 'top',
  },
  'table.footer.extend': {
    description: 'Any additional style for Table footer.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'table.footer.fill': {
    description: 'Whether the height should fill the footer.',
    type: 'string',
    defaultValue: 'vertical',
  },
  'table.footer.pad': {
    description: 'The padding of the footer.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }",
  },
  'table.footer.verticalAlign': {
    description: 'How to align the content vertically.',
    type: 'string',
    defaultValue: 'top',
  },
  'table.header.align': {
    description: 'How to align the header inside the Table.',
    type: 'string',
    defaultValue: 'start',
  },
  'table.header.background': {
    description: 'The background color of the header.',
    type: 'string | object',
    defaultValue: undefined,
  },
  'table.header.border': {
    description: 'The border side of the header.',
    type: 'string',
    defaultValue: 'bottom',
  },
  'table.header.fill': {
    description: 'Whether the height should fill the header.',
    type: 'string',
    defaultValue: 'vertical',
  },
  'table.header.extend': {
    description: 'Any additional style for Table header.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  'table.header.pad': {
    description: 'The padding of the header.',
    type: 'string | object',
    defaultValue: "{ horizontal: 'small', vertical: 'xsmall' }",
  },
  'table.header.verticalAlign': {
    description: 'How to align the content vertically.',
    type: 'string',
    defaultValue: 'bottom',
  },
};

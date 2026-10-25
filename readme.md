# JustMC Data

[![npm version](https://badge.fury.io/js/@justmc%2Fdata.svg)](https://www.npmjs.com/package/@justmc/data)

## Data generation

Generated data is available in `data/actions.json`, `data/events.json`, and
`data/values.json`. Game values use `array` and `map` for collection types and
include a `selector` (`player`, `entity`, `both`, or `null`). Actions include
their category, subcategory, action name, and object group.
Intentionally empty/default entries are excluded according to
[`patches/excluded.json`](./patches/excluded.json) across generated data,
documentation, and icons.

Generate localized Markdown documentation with:

```sh
yarn generate:docs
```

The TypeScript script downloads English, Russian, and Ukrainian Creative Plus
localization properties from
[justmc-localization](https://gitlab.com/justmc/justmc-localization/-/tree/master/creative_plus).

## Scripts

Run these with `yarn <script>`:

| Script | Description |
| --- | --- |
| `build` | Bundle the package. |
| `clean` | Remove the source cache. |
| `create:cache` | Download or update the Creative Plus source cache. |
| `create:icons` | Generate item and category icons from cached icon metadata. |
| `create:index` | Generate the package entry point. |
| `extract:events` | Extract event data and icon metadata. |
| `extract:values` | Extract game values, selectors, and icon metadata. |
| `extract:actions` | Extract actions, arguments, and icon metadata. |
| `extract` | Run all three data extractors. |
| `generate:docs` | Generate localized Markdown documentation. |
| `update` | Refresh source cache, data, icons, and documentation. |
| `generate` | Update data, generate the package entry point, and build. |

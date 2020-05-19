# vue-tags-input

A tags input component for VueJS with autocompletion, custom validation, templating and much more

:information_source: Forked from @johmun/vue-tags-input which seems no longer maintained.

[Demo & Docs](http://www.vue-tags-input.com) (:warning: → @johmun/vue-tags-input)

## Features

- No dependencies
- Custom validation rules
- Hooks: Before adding, Before deleting ...
- Edit tags after creation
- Fast setup
- Works with Vuex
- Small size: 34kb minified (css included) | gzipped 9kb
- Autocompletion
- Many customization options
- Own templates
- Delete tags on backspace
- Add tags on paste
- Examples & Docs

## Install

NPM

```
npm install --save @frk/vue-tags-input
```

Yarn

```
yarn add @frk/vue-tags-input
```

CDN (:warning: → @johmun/vue-tags-input)

```
<script src="https://unpkg.com/@johmun/vue-tags-input/dist/vue-tags-input.js"></script>
```

## Usage

```html
<template>
  <div>
    <vue-tags-input v-model="tag" :tags="tags" @tags-changed="newTags => tags = newTags" />
  </div>
</template>
```

```javascript
<script>
import VueTagsInput from '@frk/vue-tags-input';

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      tag: '',
      tags: [],
    };
  },
};
</script>
```

## TODO

- [ ] Publish a Pull request for `inheritAttrs: false` in `@johmun/vue-tags-input`.
- [ ] Update the documentation about the consequencies of `inheritAttrs: false` and publish it.
- [ ] Upgrade all the packages to their latest version.
- [ ] Document the NPM publish workflow with `np`.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2020 ODHCOM

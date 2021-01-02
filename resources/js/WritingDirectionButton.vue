<template>
  <div class="inline-block relative">
    <button
      class="bard-toolbar-button"
      :class="{
        active: getMarkAttrs('writingDirection').direction === this.button.args.direction,
      }"
      v-html="button.html"
      v-tooltip="button.text"
      @click="setDirection()"
    />
  </div>
</template>
<script>
export default {
    mixins: [BardToolbarButton],
    data() {
        return {
        getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
        };
    },
    methods: {
        setDirection() {
        this.editor.commands.writingDirection({ direction: this.button.args.direction });
        },
    },
};
</script>

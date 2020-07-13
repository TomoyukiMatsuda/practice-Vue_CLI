<template>
  <div>
    <label for="title"></label>
    <input
      id="title"
      type="text"
      :value="eventData.title"
      @input="eventData.title = $event.target.value"
    >
    <pre>{{ eventData.title }}</pre>
  </div>
</template>
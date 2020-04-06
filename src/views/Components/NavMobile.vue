<template>
    <Shutter
        open
        v-bind:content="menuContent"
        @SHOW_COMPLETE="ON_SHUTTER_SHOW()"
        @HIDE_COMPLETE="ON_SHUTTER_HIDE()"
    ></Shutter>
</template>

<script>
import Shutter from './Shutter';

export default {
    data: function() {
        return {
            menuContent: [
                {
                    title: 'Home',
                    text: 'Home'
                },
                {
                    title: 'Work',
                    text: 'Work'
                }
            ]
        }
    },
    components: {
        Shutter
    }
}
</script>
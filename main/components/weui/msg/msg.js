
"use strict";

Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        title: {
            type: String,
            value: ''
        },
        type: {
            type: String,
            value: ''
        },
        icon: {
            type: String,
            value: ''
        },
        desc: {
            type: String,
            value: ''
        },
        extClass: {
            type: String,
            value: ''
        },
        size: {
            type: Number,
            value: 64
        }
    },
    data: {}
});

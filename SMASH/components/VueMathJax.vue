<template>
    <span ref="mathComponent">
        {{formula}}
    </span>
</template>

<script>
export default {
    name: 'VueMathJax',
    props: {
    formula: {
        type: String,
        required: false,
        default: ''
    },
    },
    head() {
        return {
            script: [
                {
                    hid: 'MathJaxConfig',
                    innerHTML: `
                    MathJax = {
                        options: {
                            enableMenu: false
                        }
                    }
                    `,
                    type: 'text/javascript',
                    charset: 'utf-8'
                },
                {
                    hid: 'MathJax',
                    src: 
                    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
                }
            ],
        }
    },
    watch: {
        formula(val) {
            this.render()
        }
    },
    mounted(){
        this.render()
    },
    methods: {
        render(){
            const node = this.$refs.mathComponent;
            if (!window.MathJax) {
                node.innerHTML = "Blog";
                console.error("No MathJax Found") // eslint-disable-line
                return
            }
            MathJax.typesetClear([node]);  // eslint-disable-line
            node.innerHTML = this.formula;  // eslint-disable-line
            MathJax.typesetPromise([node])  // eslint-disable-line
        }
    }
}
</script>
module.exports = {
  env: {
    browser: true,
    node: true,
    // browser와 node에서 코드 검사여부를 선택하는 옵션
  },
  extends: [
    //vue에대한 코드규칙
    // 'plugin: vue/vue3-essential', //Lv1
    'plugin: vue/vue3-strongly-recommended', //Lv2
    // 'plugin: vue/vue3-recommended', // Lv3

    //js에대한 코드규칙
    'eslint: recommended' //권장하는 기본코드 규칙을 사용하여 자바스크립트 코드를 검사
  ],
  // extends는 eslint를 사용하여 코드검사를할 기본적인 코드규칙들을 작성할수있다.
  parserOptions: {
    parser: 'babel-eslint'
  },
  // 코드를 분석할수있는 분석기를 지정
  rules: {
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],

    "vue/html-self-closing": ["error", {
      "html": {
        "void": "alwaysa",
        "normal": "never",
        "component": "always"
      },
      "svg": "always",
      "math": "always"
    }]
  }
}

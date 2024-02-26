//import
const path = require('path') //전역모듈
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


// Node js 환경에서 작동한다.
// export 
module.exports = {
  // parcel index.html 
  resolve: {
    extensions: ['.js', '.vue'],
    //경로 별칭
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },
  //extensions에서 ['.js', '.vue'] 이런식으로 적어주게되면 import시 따로 파일확장자를 기입하지 않아도된다

  //파일을 읽어들이기 시작하는 진입점 설정
  //javascript를 진입점으로 사용한다.
  entry: './src/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // resolve는 인수로 들어온 1,2 번을 합쳐주는 역할을한다.
    //__dirname 변수는 현재 파일이 있는 현위치를 지칭한다.
    path: path.resolve(__dirname, 'dist'), // nodejs에서 필요로하는 절대경로를 필요로한다.
    filename: 'main.js',
    clean: true
    //clean 옵션을 작성하면 그전버전을 제거해준다.
  },
  //순서가 중요!
  // css-loader가 먼저 해석된다.
  // style-loader가 html 코드에 <style> 부분에 삽입해준다.
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
        //연결할 데이터가 하나뿐인경우 배열로 작성할 필요가없다.
      },
      {
        test: /\.s?css$/,
        use: [
          //순서중요!
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
          //터미널에서 Sass-loader와 sass를 설치한다. sass-loader은 sass을 웹팩에서 읽어내기위해서 필요한 패키지이고 sass모듈은 문법해석을위해 필요한 패키지.
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ]
}

// webpack 은 css를  읽을수없다. webpack이 css를 읽을수있도록 도움을 주는 패키지를 설치한다 css-loader
// style-loader 를 설치한다.
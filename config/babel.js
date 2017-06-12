module.exports = {
  presets: [
    ['es2015'],
    'stage-2'
  ],
  plugins: [
    ['transform-react-jsx', {pragma: 'h'}]
  ]
}

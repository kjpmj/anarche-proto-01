const themes = {
  color : {
    main : '#3498db',
    success : '#27ae60',
    error : '#e74c3c',
    textDefault : '#ffffff'
  },
  default () {
    return {
      bgColor : this.color.main,
      textColor : this.color.textDefault
    }
  }

}

export default themes;
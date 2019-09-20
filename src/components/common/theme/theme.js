const themes = {
  color : {
    main : '#3498db',
    success : '#27ae60',
    error : '#e74c3c',
    textDefault : '#ffffff',
    bgDefault : '#3498db'
  },
  default () {
    return {
      bgColor : this.color.bgDefault,
      textColor : this.color.textDefault
    }
  }

}

export default themes;
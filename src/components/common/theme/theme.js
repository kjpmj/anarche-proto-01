const default_theme = {
  color : {
    backGround: '#ffffff',
    main : '#3498db',
    success : '#27ae60',
    error : '#e74c3c',
    textDefault : '#ffffff',
    textDisabled : '#bdc3c7',
    bgDefault : '#3498db',
    bgDisabled : '#7f8c8d'
  },
  default () {
    return {
      bgColor : this.color.bgDefault,
      textColor : this.color.textDefault
    }
  }
}

const dark_theme = {
  color : {
    backGround : '#2c3e50',
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


const themes = {
  default_theme,
  dark_theme
}

export default themes;
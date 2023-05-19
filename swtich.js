switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      console.log('Sunday')
      break;
    case 1:
        console.log('Monday')
      day = "Monday";
      break;
    case 2:
        console.log('Tuseday')
      break;
    case 3:
        console.log('Wednesday')
      break;
    case 4:
        console.log('Thursday')
      break;
    case 5:
        console.log('Friday')
      break;
    case 6:
        console.log('Saturday')
      default:
          console.log('Looking forward to the Weekend')
  }
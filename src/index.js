module.exports = function solveEquation(equation) {
  equation = equation.replace(/\s/g, '');
	var a = +equation.substr(0,equation.indexOf('*'));
	equation = equation.slice(equation.indexOf('*')+4);
	var b = +equation.substr(0,equation.indexOf('*'));
	equation = equation.slice(equation.indexOf('*')+2);
	var c = +equation;

  var D=Math.pow(b,2)-4*a*c;
    if (D>0) {
      var x1=((-1)*b+Math.sqrt(D))/(2*a);
      var x2=((-1)*b-Math.sqrt(D))/(2*a);
    }
    else {
      var x1=(-1)*b+Math.sqrt(D)/(2*a);
    }
   if (x1>x2) { return ([Math.round(x2),Math.round(x1)]);
        }
        else {
          return ([Math.round(x1),Math.round(x2)]);
        }

  }

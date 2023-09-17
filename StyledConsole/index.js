require('./StyledConsole');

styled.assert(true, ['Asserted text', 'txtMagenta']);

const text = styled.create(['Cursive gray text', 'cursive txtGray']);
console.log(text.result);

styled.debug(['Debug text', 'lineThrough']);
styled.error(['Error text', 'txtRed']);
styled.info(['Info text', 'txtBlue']);
styled.log(['Log text', 'normal']);
styled.warn(['Warn text', 'txtYellow']);

styled.setJoiner(' ')
styled.log(
	'This are',
	['some examples', 'underline txtBlue'],
	'of different',
	['console', 'bold txtGreen'],
	['styling', 'cursive bgWhite'],
	'options',
);

styled.setDefaultStyle('txtMagenta');
styled.log('All this text', ['is formatted by default'], ['but this isn\'t', 'txtYellow']);

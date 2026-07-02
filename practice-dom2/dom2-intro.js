function changeDom() {
	// 要素の新規作成: 「ヨット」を追加
	let kazoeuta = document.querySelector('ul#kazoeuta');
	let yacht = document.createElement('li');
	yacht.textContent = 'ヨット';
	kazoeuta.insertAdjacentElement('beforeend', yacht);

	// 属性の変更: ブルームーンの画像を表示
	let img = document.querySelector('img#bluemoon');
	img.setAttribute('src', 'bluemoon.jpg');

	// 属性の変更: 拓殖大学のリンクを追加
	let a = document.createElement('a');
	a.textContent = '拓殖大学HP';
	a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
	let takudai = document.querySelector('p#takudai');
	takudai.insertAdjacentElement('afterend', a);

	// 要素の削除: 箇条書きをすべて削除
	let kassen = document.querySelector('ul#kassen');
	kassen.remove();

	// 複雑な新規要素の作成: 光の三原色の箇条書きを追加
	let ul = document.createElement('ul');

	let red = document.createElement('li');
	red.textContent = '赤';
	ul.insertAdjacentElement('beforeend', red);

	let green = document.createElement('li');
	green.textContent = '緑';
	ul.insertAdjacentElement('beforeend', green);

	let blue = document.createElement('li');
	blue.textContent = '青';
	ul.insertAdjacentElement('beforeend', blue);

	let primary = document.querySelector('p#primary');
	primary.insertAdjacentElement('afterend', ul);
}

document.querySelector('button#henkou').addEventListener('click', changeDom);

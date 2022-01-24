```SCSS
親要素 {
	display: flex / inline-flex;
	flex-wrap: 折り返し;

	/*--内訳
	①display: flex;
	②display: inline-flex;
	①か②のどちらかを指定します。
	--*/
}
.flex-item-1 {
	order: 3;
}

.flex-item-2 {
	order: 2;
}

.flex-item-3 {
	order: 1;
}
```

<br>

<img src="images/スクリーンショット 2022-01-24 12.14.54.png" width="800">
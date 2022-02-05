

```Jest Snapshot
// 各セクションへのスムーススクロール
        $('a[href*="#"]').click(function() {
            // 「クリックされたaタグ」 の id を取得
            const elmHash = $(this).attr('href');
            // ヘッダー分の高さを引く
            const section = $(elmHash).offset().top - 60;
            $('html, body').animate({scrollTop:section});
        });

        // トップへ戻るスムーススクロール


        // スクロールでヘッダーのサイズを変更
        const _header = $('#header');
        let headerHeight = $('#header').height();
        const airHeight = $('.air').height();
        let headerExtend = airHeight - headerHeight;
        // let headerShrink = airHeight - 60;
        $(window).on('scroll', function(){
            if($(this).scrollTop() > headerExtend ) {
                // _header.addClass('transform');
                _header.css('height', '60px');
                // let headerExtend = airHeight - headerHeight;
            } else {
                _header.css('height', '90px');
                let headerExtend = airHeight - headerHeight;
            }
        });
```

```JavaScript+ERB
// 各セクションへのスムーススクロール
        $('a[href*="#"]').click(function() {
            // 「クリックされたaタグ」 の id を取得
            const elmHash = $(this).attr('href');
            // ヘッダー分の高さを引く
            const section = $(elmHash).offset().top - 60;
            $('html, body').animate({scrollTop:section});
        });

        // トップへ戻るスムーススクロール


        // スクロールでヘッダーのサイズを変更
        const _header = $('#header');
        let headerHeight = $('#header').height();
        const airHeight = $('.air').height();
        let headerExtend = airHeight - headerHeight;
        // let headerShrink = airHeight - 60;
        $(window).on('scroll', function(){
            if($(this).scrollTop() > headerExtend ) {
                // _header.addClass('transform');
                _header.css('height', '60px');
                // let headerExtend = airHeight - headerHeight;
            } else {
                _header.css('height', '90px');
                let headerExtend = airHeight - headerHeight;
            }
        });
```

```JSON5
// 各セクションへのスムーススクロール
        $('a[href*="#"]').click(function() {
            // 「クリックされたaタグ」 の id を取得
            const elmHash = $(this).attr('href');
            // ヘッダー分の高さを引く
            const section = $(elmHash).offset().top - 60;
            $('html, body').animate({scrollTop:section});
        });

        // トップへ戻るスムーススクロール


        // スクロールでヘッダーのサイズを変更
        const _header = $('#header');
        let headerHeight = $('#header').height();
        const airHeight = $('.air').height();
        let headerExtend = airHeight - headerHeight;
        // let headerShrink = airHeight - 60;
        $(window).on('scroll', function(){
            if($(this).scrollTop() > headerExtend ) {
                // _header.addClass('transform');
                _header.css('height', '60px');
                // let headerExtend = airHeight - headerHeight;
            } else {
                _header.css('height', '90px');
                let headerExtend = airHeight - headerHeight;
            }
        });
```

```JavaScript
// 各セクションへのスムーススクロール
        $('a[href*="#"]').click(function() {
            // 「クリックされたaタグ」 の id を取得
            const elmHash = $(this).attr('href');
            // ヘッダー分の高さを引く
            const section = $(elmHash).offset().top - 60;
            $('html, body').animate({scrollTop:section});
        });

        // トップへ戻るスムーススクロール


        // スクロールでヘッダーのサイズを変更
        const _header = $('#header');
        let headerHeight = $('#header').height();
        const airHeight = $('.air').height();
        let headerExtend = airHeight - headerHeight;
        // let headerShrink = airHeight - 60;
        $(window).on('scroll', function(){
            if($(this).scrollTop() > headerExtend ) {
                // _header.addClass('transform');
                _header.css('height', '60px');
                // let headerExtend = airHeight - headerHeight;
            } else {
                _header.css('height', '90px');
                let headerExtend = airHeight - headerHeight;
            }
        });
```


```Cycript
// 各セクションへのスムーススクロール
        $('a[href*="#"]').click(function() {
            // 「クリックされたaタグ」 の id を取得
            const elmHash = $(this).attr('href');
            // ヘッダー分の高さを引く
            const section = $(elmHash).offset().top - 60;
            $('html, body').animate({scrollTop:section});
        });

        // トップへ戻るスムーススクロール


        // スクロールでヘッダーのサイズを変更
        const _header = $('#header');
        let headerHeight = $('#header').height();
        const airHeight = $('.air').height();
        let headerExtend = airHeight - headerHeight;
        // let headerShrink = airHeight - 60;
        $(window).on('scroll', function(){
            if($(this).scrollTop() > headerExtend ) {
                // _header.addClass('transform');
                _header.css('height', '60px');
                // let headerExtend = airHeight - headerHeight;
            } else {
                _header.css('height', '90px');
                let headerExtend = airHeight - headerHeight;
            }
        });
```
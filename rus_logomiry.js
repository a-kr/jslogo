function install_logo_russian_language_support(logo) {
    logo.keywordAlias = function(name) {
        return {
            'КОНЕЦ': 'END',
            'ИНАЧЕ': 'ELSE',
        }[name];
    };
    logo.colorAlias = function(name) {
        return {
            'черный': "black", 'синий': "blue", 'салатовый': "lime", 'голубой': "cyan",
            'красный': "red", 'розовый': "magenta", 'желтый': "yellow", 'белый': "white",
            'коричневый': "brown", 'бурый': "tan", 'зеленый': "green", 'аквамарин': "aquamarine",
            'убиться_веником': "salmon", 'пурпурный': "purple", 'оранжевый': "orange", 'серый': "gray",
            'фиолетовый': "violet"
        }[name];
    };
    logo.copydef("это", "to");
    logo.copydef("вперед", "forward");
    logo.copydef("вп", "fd");
    logo.copydef("назад", "back");
    logo.copydef("нд", "bk");
    logo.copydef("направо", "right");
    logo.copydef("пр", "rt");
    logo.copydef("налево", "left");
    logo.copydef("лв", "lt");
    logo.copydef("по", "pd");
    logo.copydef("пп", "pu");
    logo.copydef("нов_курс", "setheading");
    logo.copydef("нк", "setheading");
    logo.copydef("жди", "wait");
    logo.copydef("повтори", "repeat");
    logo.copydef("нов_место", "setxy");
    logo.copydef("нм", "setxy");
    logo.copydef("нов_размер_пера", "setpensize");
    logo.copydef("нрп", "setpensize");
    logo.copydef("нов_цвет", "setpencolor");
    logo.copydef("нц", "setpencolor");
    logo.copydef("делай", "run");
    logo.copydef("крась", "fill");
    logo.copydef("если", "if");
    logo.copydef("если_иначе", "ifelse");
    logo.copydef("стоп", "stop");
    logo.copydef("сг", "clearscreen");
    logo.copydef("сотри", "clearscreen");
    logo.copydef("сл", "random");
    logo.copydef("сл_элемент", "pick");
    logo.copydef("сч", "hideturtle");
    logo.copydef("пч", "showturtle");
    logo.copydef("домой", "home");
    logo.copydef("окно", "window");
    logo.copydef("дай_позицию", "pos");
    logo.copydef("уст_позицию", "setpos");
}

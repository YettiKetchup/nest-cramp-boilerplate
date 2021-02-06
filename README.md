# Cramp Nest

![alt text](https://i.ibb.co/VSNWZmY/cnest-boilerplate-intro.jpg)

Подробная документация Cramp: https://github.com/YettiKetchup/cramp


# Установка

Скачать проект с сабмодулями: git clone --recursive https://github.com/YettiKetchup/nest-cramp-boilerplate.git

Переключить ветку саб-модуля Cramp на main (если это не произошло автоматически)


# Запуск и сборка

Выполнить одну из стандартных NestJS команд, описанных в package.json


# Биндинги типов

Используйте биндинги типов! Биндинги типов позволяют пользователю создавать Компоненты, Сущности и Системы готовые к переносу в другие окружения. Например, мы использовали Cramp на сервере в окружении NestJS. Мы создали огромное количество Компонентов и Систем исправно работающих на сервере, но в один момент часть из них потребовалась на клиенте. Благодаря биндингам нам не составит труда просто взять и перенести все необходимые Компоненты и Системы на клиент, например в CocosCreator, или PlayCanvas, или любое другое клиентское окружение. Благодяря тому, что наши Компоненты наследуются не от CrampNodeComponent или CocosCreatorCrampComponent, а от CrampComponent, который ссылается на один из этих типов, в зависимости от оружения, мы с легкостью можем переносить их из окружения в окружение. Разумеется, стоит понимать, что не все Компоненты и Системы подлежат переносу. Те Системы и Компоненты каким-либо образом ссылающиеся на окружение не могут быть перенесены, да и нет в этом никакого смысла. Нам же не нужно тянуть в серверное окружение Системы, котоыре работают с графикой, верно? Поэтому при создании Систем старайтесь следовать простому правилу Single Responsibility. Если какая-то Система манипулирует с данными пользовательских Компонентов, она не может также манипулировать даными графики или физики, или какими-либо еще. Для этого стоит создать еще одну и использовать ее в цепочке вызовов Контейнера, либо в качестве декоратора. Словом, при проектировании игр на Cramp всегда задавайтесь вопросом: "А смогу ли я перенести эту Систему в другое окружение и потребуется ли вообще?".

Всего существует 6 биндингов, однако, при необходимости, пользователь может добавить во все свои окружения еще. Все биндинги описаны в файле bindings.ts в корневой папке модулей Cramp и могут быть переопределены.

```
export class            CrampComponent                  extends     CrampNestComponent {};
export class            CrampCachedComponent            extends     CachedCrampNestComponent {};
export class            CrampNode                       extends     Object {};
export abstract class   CrampSystem<TData>              extends     CrampNestSystem<TData> {};
export class            CrampEntity                     extends     CrampNestEntity {};

export abstract class   CrampEntityFactory<TData>      implements   IEntityFactory<CrampComponent, CrampEntity, TData> {
    public abstract create(id: string, data?: TData): CrampEntity;
}
```

В итоге, благодаря биндингам, все наши Компоненты, Системы и Сущности выглядят одинаково, вне зависимости от того, в каком окружении они были созданы.

Вот так выглядит Компонент:
```
class ExampleComponent extends CrampCachedComponent {
    value: string = '';
}
```

Это Сущность:
```
class ExampleEntity extends CrampEntity {
    //...
}
```

Это Система:
```
class ExampleSystem extends CrampSystem<any> {
    //...
}
```

# Другие интеграционные бойлерплейты

CocosCreator 2x - https://github.com/YettiKetchup/cc-cramp-boilerplate

CocosCreator 3x - В процессе разработки...

PlayCanvas - В процессе разработки...

Nest - https://github.com/YettiKetchup/nest-cramp-boilerplate

Пользователь без проблем сможет сам синтегрировать Cramp в свой проект, следуя примеру одного из готовых бойлерплейтов.


# Примеры

Cramp API Example: https://github.com/YettiKetchup/cramp-pure-example
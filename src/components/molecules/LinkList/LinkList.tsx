import React from 'react';
import css from './LinkList.module.css';
import Button from '../../atoms/Button';

export type LinkListItem = {
    text: string;
    url: string;
};

export type Props = {
    title: string;
    items: LinkListItem[];
};

const LinkList: React.FunctionComponent<Props> = ({ title, items }: Props) => (
    <div className={css.linkList}>
        <h2>{title}</h2>
        {items.map((item, key) => (
            <Button text={item.text} url={item.url} className={css.item} key={key}></Button>
        ))}
    </div>
);

export default LinkList;

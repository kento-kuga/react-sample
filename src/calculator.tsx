import React from 'react';
import styled from 'styled-components';

interface Props {
    /** クラスネーム */
    className?: string;
}

// 計算機コンポーネント
const CalculatorPresenter = (props: Props) => {

    // state
    // 合計値
    const [sum, setSum] = React.useState(0);
    // 計算値リスト
    const [valueList, setValueList] = React.useState([0, 0, 0]);

    //function
    //値変更時ハンドラ
    const handleChangeValue = (index: number, value: string) => {

        if (Number.isNaN(Number(value))) {
            //もし渡された値が数字じゃなかったら何もしない
            return;
        }

        //計算値リストの特定の値を、渡された値で更新
        const tmpValueList = [...valueList];
        tmpValueList[index] = Number(value);

        //計算値リストを更新
        setValueList(tmpValueList);

        //合計値を計算
        const tmpSum = tmpValueList.reduce((sum, value) => {
            return sum + value;
        }, 0);

        //合計値をセット
        setSum(tmpSum);
    }

    //追加ボタン押下時ハンドラ
    const handleClickAdd = () => {
        //計算値リストに初期値を一つ追加する。
        const tmpValueList = [...valueList];
        tmpValueList.push(0);
        setValueList(tmpValueList);
    }

    return (
        <div className={props.className}>
            <div className="row sum-row">
                合計：{sum}
            </div>
            {valueList.map((value, i) => (
                <div className="row value-row">
                    <input type="text" value={value} onChange={(e) => handleChangeValue(i, e.target.value)} className="value-input" />
                </div>
            ))}
            <div className="row add-button-row">
                <button onClick={handleClickAdd}>追加</button>
            </div>
        </div>
    );
}

//スタイル
export const Calculator = styled(CalculatorPresenter)`
    .sum-row{
        text-align: right;
        padding-right: 22rem;
        font-size: 2rem;
    }
    .value-row{
        text-align: center;
        .value-input {
        text-align: right;
        width: 50%;
        }
    }
    .add-button-row{
        text-align: center;
    }
`;
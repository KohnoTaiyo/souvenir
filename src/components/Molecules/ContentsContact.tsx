// import React, { useState } from 'react'
import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Inputs } from '../../interfaces'

const ContentsContact = () => {
  // const { register, handleSubmit, errors } = useForm<Inputs>()
  // const onSubmit = (data: Inputs) => console.log(data)
  // const [val, setVal] = useState('')

  return (
    <section
      id="contact"
      className="bg-gray-350 font-light min-h-screen sm:min-h-0">
      <div className="md:wrap wrap-sp lg:pl-80">
        <h2 className="title text-gray-50">Contact</h2>
        <div className="text-gray-50">Coming Soon...</div>
        {/* <form onSubmit={handleSubmit(onSubmit)} className="text-gray-50">
          <label className="block mb-1 text-lg">
            お問い合わせ内容<span className="text-red-500">*</span>
          </label>
          <label className="mr-2">
            <input
              type="radio"
              value="チケット予約"
              name="inquire"
              checked={val === 'チケット予約'}
              onChange={() => setVal('チケット予約')}
              ref={register({ required: '選択してください' })}
              className="mr-1"
            />
            チケット予約
          </label>
          <label>
            <input
              type="radio"
              value="お問い合わせ"
              name="inquire"
              checked={val === 'お問い合わせ'}
              onChange={() => setVal('お問い合わせ')}
              ref={register({
                required: 'お問い合わせ内容が選択されていません',
              })}
              className="mr-1"
            />
            お問い合わせ
          </label>
          <p className="text-red-500 mt-1">
            {errors.inquire && errors.inquire.message}
          </p>

          <label className="block mt-4 mb-1 text-lg">
            お名前(ニックネーム)<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="杉山 悠佑"
            className="text-gray-900 w-full p-1 focus:outline-none"
            autoComplete="name"
            ref={register({
              required: 'お名前が入力されていません',
              maxLength: {
                value: 50,
                message: '50文字以内で入力してください',
              },
            })}
          />
          <p className="text-red-500 mt-1">
            {errors.kana && errors.kana.message}
          </p>

          <label className="block mt-4 mb-1 text-lg">
            フリガナ<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="kana"
            placeholder="スギヤマ ユウスケ"
            className="text-gray-900 w-full p-1 focus:outline-none"
            autoComplete="name"
            ref={register({
              required: 'お名前が入力されていません',
              maxLength: {
                value: 50,
                message: '50文字以内で入力してください',
              },
            })}
          />
          <p className="text-red-500 mt-1">
            {errors.name && errors.name.message}
          </p>

          <label className="block mt-4 mb-1 text-lg">
            メールアドレス<span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="souvenir@souvenir.com"
            className="text-gray-900 w-full p-1 focus:outline-none"
            autoComplete="email"
            inputMode="url"
            ref={register({
              required: 'メールアドレスが入力されていません',
              maxLength: {
                value: 150,
                message: '150文字以内で入力してください',
              },
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'メールアドレスの形式が間違っています',
              },
            })}
          />
          <p className="text-red-500 mt-1">
            {errors.email && errors.email.message}
          </p>

          <label className="block mt-4 mb-1 text-lg">
            メッセージ本文<span className="text-red-400">*</span>
          </label>
          <textarea
            name="text"
            placeholder="予約名(フリガナ)、予約日、チケット枚数など"
            className="text-gray-900 w-full p-1 h-60 min-h-full focus:outline-none"
            ref={register({
              required: 'お問い合わせ内容が入力されていません',
              maxLength: {
                value: 3000,
                message: '3000文字以内で入力してください',
              },
            })}
          />
          <p className="text-red-500 mt-1">
            {errors.text && errors.text.message}
          </p>

          <input
            type="submit"
            value="送信する"
            className="mt-5 w-full border-2 border-gray-50 p-2 hover:bg-gray-50 hover:text-gray-350 bg-gray-350 duration-150"
          />
        </form> */}
      </div>
    </section>
  )
}
export default ContentsContact

{/*import React from 'react'
import {
	Control,
	Controller,
	FieldError,
	FieldPath,
	FieldValues,
	RegisterOptions,
} from 'react-hook-form'
import classNames from 'classnames'

type TextInputTypes =
	| 'none'
	| 'URL'
	| 'addressCity'
	| 'addressCityAndState'
	| 'addressState'
	| 'countryName'
	| 'creditCardNumber'
	| 'emailAddress'
	| 'familyName'
	| 'fullStreetAddress'
	| 'givenName'
	| 'jobTitle'
	| 'location'
	| 'middleName'
	| 'name'
	| 'namePrefix'
	| 'nameSuffix'
	| 'nickname'
	| 'organizationName'
	| 'postalCode'
	| 'streetAddressLine1'
	| 'streetAddressLine2'
	| 'sublocality'
	| 'telephoneNumber'
	| 'username'
	| 'password'
	| 'newPassword'
	| 'oneTimeCode'

type InputModeOptions =
	| 'none'
	| 'search'
	| 'text'
	| 'email'
	| 'tel'
	| 'url'
	| 'numeric'
	| 'decimal'
	| undefined

type FormTextInputProps<
	T extends FieldValues = FieldValues,
	N extends FieldPath<T> = FieldPath<T>
> = {
	label?: string
	readonly?: boolean
	labelTextClassName?: string
	error?: FieldError
	inputMode?: InputModeOptions
	autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
	type?: TextInputTypes
	placeholderTextColor?: string
	onBlur?: () => void
	onChange?: (text: string) => void
	noBorder?: boolean
	placeholder?: string
	rightElement?: React.ReactNode
	leftElement?: React.ReactNode
	name: N
	containerClass?: string
	secureTextEntry?: boolean
	control?: Control<T>
	disabled?: boolean
	isRequired?: boolean
	inputClassName?: string
	labelClassName?: string
	description?: string
	rules?: Omit<
		RegisterOptions<T, N>,
		'disabled' | 'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>
}

export function FormInput<
	T extends FieldValues = FieldValues,
	N extends FieldPath<T> = FieldPath<T>
>({
	label,
	error,
	autoCapitalize,
	type,
	inputMode,
	placeholderTextColor,
	placeholder,
	noBorder,
	rightElement,
	leftElement,
	name,
	disabled = false,
	containerClass,
	control,
	labelTextClassName,
	isRequired,
	rules,
	readonly,
	description,
}: Readonly<FormTextInputProps<T, N>>) {
	return (
		<div className={w-full mt-4 ${containerClass}}>
			{label ? (
				<div className="mt-2">
					<p
						className={text-neutral-20 font-poppins text-base text-left ${labelTextClassName}}
					>
						{label}&nbsp;&nbsp;&nbsp;
						{isRequired ? (
							<span className="text-red-500 text-base">*</span>
						) : null}
					</p>
					{description && (
						<p className={text-neutral-40 font-poppins text-xs mt-1}>
							{description}
						</p>
					)}
				</div>
			) : null}
			<div
				className={`border bg-neutral-98 mt-2 h-12 ${
					noBorder
						? 'border-0'
						: 'border-gray-5 active:border-gray-10 focus:border-gray-10'
				} rounded-lg ${error ? 'border-red-500' : ''} flex flex-row`}
			>
				{leftElement ? (
					<div
						className={bg-neutral-95 flex items-center justify-center h-full min-w-[60px] rounded-lg}
					>
						{leftElement}
					</div>
				) : null}
				<div className="flex flex-grow">
					<Controller
						control={control}
						name={name}
						rules={rules}
						render={({ field: { onChange, onBlur, value } }) => (
							<input
								className={classNames(
									text-neutral-20  w-full rounded-lg h-auto text-base bg-white-10 flex items-center justify-center placeholder-gray-10 ${placeholderTextColor},
									{
										'px-1': leftElement,
										'px-2': !leftElement,
										'bg-gray-10': disabled,
									}
								)}
								style={{ lineHeight: 18 }}
								placeholder={placeholder}
								readOnly={readonly}
								disabled={disabled}
								type={type}
								inputMode={inputMode}
								autoCapitalize={autoCapitalize || 'none'}
								onChange={e => onChange(e.target.value)}
								onBlur={onBlur}
								value={value}
							/>
						)}
					/>
				</div>
				{rightElement ? (
					<div className={flex items-center justify-center px-2}>
						{rightElement}
					</div>
				) : null}
			</div>
			{error ? (
				<div className="mt-1">
					<p className="text-red-400 font-poppins text-xs">{error.message}</p>
				</div>
			) : null}
		</div>
	)
}
*/}
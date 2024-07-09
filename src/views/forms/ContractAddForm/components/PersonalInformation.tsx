import Input from '@/components/ui/Input'
import InputGroup from '@/components/ui/InputGroup'
import Button from '@/components/ui/Button'
import DatePicker from '@/components/ui/DatePicker'
import Select from '@/components/ui/Select'
import { FormItem, FormContainer } from '@/components/ui/Form'
import { Field, Form, Formik } from 'formik'
import { NumericFormat, NumericFormatProps } from 'react-number-format'
import { countryList } from '@/constants/countries.constant'
import { statusOptions } from '../constants'
import { components } from 'react-select'
import dayjs from 'dayjs'
import * as Yup from 'yup'
import type { OptionProps, SingleValueProps } from 'react-select'
import type { FieldInputProps, FieldProps } from 'formik'
import type { PersonalInformation as PersonalInformationType } from '../store'
import type { ComponentType } from 'react'
import type { InputProps } from '@/components/ui/Input'
import { religionsList } from '@/constants/religions.constant'

type CountryOption = {
    label: string
    dialCode: string
    value: string
}

type FormModel = PersonalInformationType

type PersonalInformationProps = {
    data: PersonalInformationType
    onNextChange?: (
        values: FormModel,
        formName: string,
        setSubmitting: (isSubmitting: boolean) => void
    ) => void
    currentStepStatus?: string
}

const { SingleValue } = components

const genderOptions = [
    { label: 'Islam', value: 'M' },
    { label: 'Christianity', value: 'F' },
    { label: 'Hindu', value: 'O' },
]

const NumberInput = (props: InputProps) => {
    return <Input {...props} value={props.field.value} />
}

const NumericFormatInput = ({
    onValueChange,
    ...rest
}: Omit<NumericFormatProps, 'form'> & {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    form: any
    field: FieldInputProps<unknown>
}) => {
    return (
        <NumericFormat
            customInput={Input as ComponentType}
            type="text"
            autoComplete="off"
            onValueChange={onValueChange}
            {...rest}
        />
    )
}

const PhoneSelectOption = ({
    innerProps,
    data,
    isSelected,
}: OptionProps<CountryOption>) => {
    return (
        <div
            className={`cursor-pointer flex items-center justify-between p-2 ${
                isSelected
                    ? 'bg-gray-100 dark:bg-gray-500'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            {...innerProps}
        >
            <div className="flex items-center gap-2">
                <span>
                    ({data.value}) {data.dialCode}
                </span>
            </div>
        </div>
    )
}

const PhoneControl = (props: SingleValueProps<CountryOption>) => {
    const selected = props.getValue()[0]
    return (
        <SingleValue {...props}>
            {selected && <span>{selected.dialCode}</span>}
        </SingleValue>
    )
}

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name Required'),
    lastName: Yup.string().required('Last Name Required'),
    email: Yup.string().email('Invalid email').required('Email Required'),
    nationality: Yup.string().required('Please select your nationality'),
    phoneNumber: Yup.string().required('Please enter your phone number'),
    dob: Yup.string().required('Please enter your date of birth'),
    gender: Yup.string().required('Please enter your gender'),
    maritalStatus: Yup.string().required('Please enter your marital status'),
    dialCode: Yup.string().required('Please select dial code'),
})

const PersonalInformation = ({
    data = {
        firstName: '',
        lastName: '',
        email: '',
        residentCountry: '',
        nationality: '',
        dialCode: '',
        phoneNumber: '',
        dob: '',
        gender: '',
        maritalStatus: '',
    },
    onNextChange,
    currentStepStatus,
}: PersonalInformationProps) => {
    const onNext = (
        values: FormModel,
        setSubmitting: (isSubmitting: boolean) => void
    ) => {
        onNextChange?.(values, 'personalInformation', setSubmitting)
    }

    return (
        <>
            <div className="mb-8">
                <h2 className='mb-3'>Add New Contract</h2>
                <h3 className="mb-2">Contract Information</h3>
                <p>Basic information for adding a contract</p>
            </div>
            <Formik
                initialValues={data}
                enableReinitialize={true}
                // validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true)
                    setTimeout(() => {
                        onNext(values, setSubmitting)
                    }, 1000)
                }}
            >
                {({ values, touched, errors, isSubmitting }) => {
                    return (
                        <Form>
                            <FormContainer>
                                <div className="md:grid grid-cols-2 gap-4">
                                    <FormItem
                                        label="Contract Number"
                                        invalid={
                                            errors.firstName &&
                                            touched.firstName
                                        }
                                        errorMessage={errors.firstName}
                                    >
                                        <Field
                                            type="text"
                                            autoComplete="off"
                                            name="Contract Number"
                                            placeholder="Contract Number"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Contract Date"
                                        invalid={errors.dob && touched.dob}
                                        errorMessage={errors.dob}
                                    >
                                        <Field name="dob" placeholder="Date">
                                            {({ field, form }: FieldProps) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    value={field.value}
                                                    onChange={(date) => {
                                                        form.setFieldValue(
                                                            field.name,
                                                            dayjs(date).format(
                                                                'YYYY-MM-DD'
                                                            )
                                                        )
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                    <FormItem
                                        label="Amount"
                                        invalid={
                                            errors.lastName && touched.lastName
                                        }
                                        errorMessage={errors.lastName}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            name="lastName"
                                            placeholder="Amount"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Delivery Charges"
                                        invalid={
                                            errors.lastName && touched.lastName
                                        }
                                        errorMessage={errors.lastName}
                                    >
                                        <Field
                                            type="number"
                                            autoComplete="off"
                                            name="Delivery Charges"
                                            placeholder="Delivery Charges"
                                            component={Input}
                                        />
                                    </FormItem>
                                    <FormItem
                                        label="Start Date"
                                        invalid={errors.dob && touched.dob}
                                        errorMessage={errors.dob}
                                    >
                                        <Field name="dob" placeholder="Start Date">
                                            {({ field, form }: FieldProps) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    value={field.value}
                                                    onChange={(date) => {
                                                        form.setFieldValue(
                                                            field.name,
                                                            dayjs(date).format(
                                                                'YYYY-MM-DD'
                                                            )
                                                        )
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                    <FormItem
                                        label="End Date"
                                        invalid={errors.dob && touched.dob}
                                        errorMessage={errors.dob}
                                    >
                                        <Field name="dob" placeholder="End Date">
                                            {({ field, form }: FieldProps) => (
                                                <DatePicker
                                                    field={field}
                                                    form={form}
                                                    value={field.value}
                                                    onChange={(date) => {
                                                        form.setFieldValue(
                                                            field.name,
                                                            dayjs(date).format(
                                                                'YYYY-MM-DD'
                                                            )
                                                        )
                                                    }}
                                                />
                                            )}
                                        </Field>
                                    </FormItem>
                                </div>
                                <FormItem
                    label="Notes"
                >
                    <Field
                        type="text"
                        autoComplete="off"
                        name="Notes"
                        placeholder="Notes"
                        component={Input}
                    />
                </FormItem>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        loading={isSubmitting}
                                        variant="solid"
                                        type="submit"
                                    >
                                        {currentStepStatus === 'complete'
                                            ? 'Save'
                                            : 'Next'}
                                    </Button>
                                </div>
                            </FormContainer>
                        </Form>
                    )
                }}
            </Formik>
        </>
    )
}

export default PersonalInformation

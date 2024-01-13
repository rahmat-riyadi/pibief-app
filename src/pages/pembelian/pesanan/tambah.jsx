import {
  Box,
  Button,
  CircularProgress,
  Divider,
  InputBase,
  NativeSelect,
  Stack,
  Typography,
} from "@mui/material";
import BreadCrumbsNav from "../../../components/BreadCrumbs";
import { useState } from "react";
import { AddRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import { useForm, useFieldArray } from "react-hook-form";
import ProductRow from "../../../components/ProductRow";
import { storePurchase } from "../../../services/purchase";
import { useNavigate } from "react-router-dom";
import AlertNotif from "../../../components/Alert";
import rupiahFormatter from "../../../utils/rupiahFormatter";

const baseInputStyle = {
  bgcolor: "#F5F8FA",
  py: "5px",
  px: "10px",
  fontSize: "14px",
};

const FormInputLabel = ({ label }) => {
  return (
    <Typography
      variant="body1"
      sx={{ fontSize: "13px", fontWeight: "300", mb: 1 }}
    >
      {label}
    </Typography>
  );
};

const SummaryRow = ({ label, number }) => {
  return (
    <Stack direction="row">
      <Box sx={{ flex: 1.3 }}>
        <Typography
          align="right"
          sx={{ fontSize: "14px", fontWeight: "600" }}
          variant="body1"
        >
          {label}
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          align="right"
          variant="body1"
          sx={{ fontSize: "14px", fontWeight: "600" }}
        >
          {number}
        </Typography>
      </Box>
    </Stack>
  );
};

const ErrorText = ({ text }) => {
  return <Typography variant='body1' sx={{ color: 'red', fontSize: '12px', mt: '5px' }} >{text}</Typography>
}

const TambahPesanan = () => {

  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)

  const [alertOpt, setAlertOpt] = useState({
    visible: false,
    message: '',
    type: 'error'
  })
  const [showBiayaKirim, setShowBiayaKirim] = useState(false)

  const { getValues, watch, setValue, control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      products: [
        {
          product_name: '',
          unit: '',
          taxes: '',
          price: '',
          total_price: '',
          quantity: ''
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'products' })

  const totalPrice = watch('total_price')
  const subTotal = watch('sub_total')

  const onSubmit = async data => {

    setLoading(true)

    console.log(data)

    await storePurchase(data)
    .then( res => {

      setAlertOpt({
        visible: true,
        message: res.message,
        type: 'success'
      })

      setTimeout(() => {
        return navigate(-1)
      }, 3000)

    })
    .catch( err => {

      setAlertOpt({
        visible: true,
        message: err.message,
        type: 'success'
      })

    })
    .finally(() => setLoading(false))

  }

  const setSummaryValue = () => {
    const productPrice = fields.map((_,i) => getValues(`products.${i}.total_price`))
    const subTotal = productPrice.reduce( (prev, curr) => prev + curr, 0)
    setValue('sub_total', subTotal)
    const shippingCost = Number(getValues('shippingCost')) ?? 0
    const totalPrice = subTotal + shippingCost
    setValue('total_price', totalPrice)
  }

  const handleTotal = (e) => {
    const idx = e.target.name.split('.')[1]
    let [ quantity, price, discount, totalPrice ] = getValues([
      `products.${idx}.quantity`,
      `products.${idx}.price`,
      `products.${idx}.discount`,
      `products.${idx}.total_price`,
    ])
    totalPrice = 
      discount !== 0 && discount !== null && discount !== ''
      ? 
      quantity * price - (quantity * price * (discount / 100)) 
      : 
      quantity * price
    setValue(`products.${idx}.total_price`, totalPrice)
    setSummaryValue()
  }

  return (
    <Box>
      <BreadCrumbsNav />
      <Typography variant="h6" sx={{ my: "20px" }}>
        Tambah Pesanan
      </Typography>
      <Typography variant="body1" sx={{ mb: "20px", fontWeight: "500" }}>
        Form Vendor
      </Typography>
      <Stack justifyContent="space-between" direction="row" sx={{ mb: 2 }}>
        <Box sx={{ flex: 1, mr: 2 }}>
          <FormInputLabel label="Vendor" />
          <InputBase
            sx={{ ...baseInputStyle, width: "100%" }}
            {...register("vendor", {
              required: { value: true, message: "masukan vendor" },
            })}
          />
          {errors.vendor && <ErrorText text={errors.vendor.message} />}
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormInputLabel label="Nomor Order" />
          <InputBase sx={{ ...baseInputStyle, width: "100%" }} {...register('order_number', { required: { value: true, message: 'masukkan nomor order' } })} />
          {errors.order_number && <ErrorText text={errors.order_number.message} />}
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
        <Box sx={{ flex: 1 }}>
          <FormInputLabel label="Tanggal Pesan" />
          <InputBase type="date" sx={{ ...baseInputStyle, width: "100%" }} {...register('order_date', { required: { value: true, message: 'masukkan tanggal ' } })} />
          {errors.order_date && <ErrorText text={errors.order_date.message} />}
        </Box>
        <Box sx={{ flex: 1, mx: 2 }}>
          <FormInputLabel label="Tanggal Jatuh Tempo" />
          <InputBase sx={{ ...baseInputStyle, width: "100%" }} type="date" {...register('due_date', { required: { value: true, message: 'masukkan tanggal ' } })} />
          {errors.due_date && <ErrorText text={errors.due_date.message} />}
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormInputLabel label="Pembayaran" />
          <NativeSelect
            input={<InputBase/>}
            sx={{ ...baseInputStyle, width: "100%" }}
            IconComponent={() => <KeyboardArrowDownRounded />}
            {...register('payment_type', { required: { value: true, message: 'pilih metode pembayaran ' }})}
          >
            <option>Cash On Delivery</option>
            <option>Credit</option>
          </NativeSelect>
          {errors.payment_type && <ErrorText text={errors.payment_type.message} />}
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Box sx={{ flex: 1, mx: 2, ml: 0 }}>
          <FormInputLabel label="Cabang" />
          <NativeSelect
            input={<InputBase/>}
            sx={{ ...baseInputStyle, width: "100%" }}
            IconComponent={() => <KeyboardArrowDownRounded />}
            {...register('branch', { required: { value: true, message: 'pilih cabang' } })}
          >
            <option>Cabang 1</option>
            <option>Cabang 2</option>
          </NativeSelect>
          {errors.branch && <ErrorText text={errors.branch.message} />}
        </Box>
        <Box sx={{ flex: 1 }}>
          <FormInputLabel label="Apoteker Penanggung Jawab" />
          <InputBase sx={{ ...baseInputStyle, width: "100%" }} {...register('responsible_person', { required: { value: true, message: 'masukkan penanggung jawab' } })}  />
          {errors.responsible_person && <ErrorText text={errors.responsible_person.message} />}
        </Box>
      </Stack>
      <Typography variant="body1" sx={{ mb: "20px", fontWeight: "500", my: 3 }}>
        Form Vendor
      </Typography>
      {fields.map( (e,i) => 
      <ProductRow 
        key={e.id}
        register={register}
        index={i}
        remove={remove}
        showDelete={fields.length > 1}
        handleTotal={handleTotal}
        errors={errors}
      />)}
      <Button
        variant="outlined"
        color="secondary"
        sx={{ textTransform: "capitalize" }}
        onClick={() => append()}
      >
        Tambah Baris
      </Button>
      <Stack sx={{ mt: 3 }} direction="row" columnGap={2}>
        <Box sx={{ flex: 1 }}>
          <Typography variant="body1" sx={{ fontWeight: "500", mb: 2 }}>
            Catatan
          </Typography>
          <FormInputLabel label="pesan" />
          <InputBase multiline fullWidth sx={{ ...baseInputStyle }} rows={3} />
          {/* // barus ini untuk table */}
        </Box>
        <Box sx={{ flex: 1, pt: "70px" }}>
          <InputBase {...register('sub_total')} type='hidden' />
          <SummaryRow label="Sub Total" number={ subTotal ? rupiahFormatter(subTotal) : 0} />
          <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
          {/* {
            (discountTotal !== 0)
            &&
            <>
              <SummaryRow label="Diskon Per Item" number={discountTotal} />
              <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
            </>  
          } */}
          {
            !showBiayaKirim
            &&
            <Stack alignItems="flex-end">
              <Button
                variant="text"
                color="secondary"
                sx={{
                  textTransform: "capitalize",
                  mr: 0,
                  width: "fit-content",
                  fontSize: "14px",
                }}
                startIcon={<AddRounded />}
                onClick={ () => setShowBiayaKirim(!showBiayaKirim) }
              >
                Biaya Kirim
              </Button>
            </Stack>
          }
          {
            showBiayaKirim
            &&
            <Stack direction="row" alignItems='center'>
              <Typography
                align="right"
                sx={{ fontSize: "14px", fontWeight: "600", flex: 1.5 }}
                variant="body1"
              >
                Biaya Kirim
              </Typography>
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <InputBase 
                  type='number'
                  sx={{ ...baseInputStyle }} 
                  {...register('shippingCost', { onChange: () => setSummaryValue() })}
                />
              </Box>
            </Stack>
          }
          <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
          <Stack direction="row" alignItems="center">
            <Typography
              align="right"
              sx={{ fontSize: "16px", fontWeight: "600", flex: 1.3 }}
              variant="body1"
            >
              Total
            </Typography>
            <Typography
              align="right"
              sx={{ fontSize: "16px", fontWeight: "600", flex: 1 }}
              variant="body1"
            >
              <InputBase type="hidden" {...register('total_price')} />
              {totalPrice ? rupiahFormatter(totalPrice) : 0}
            </Typography>
          </Stack>
          <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
          <Button
            variant="contained"
            fullWidth
            sx={{ textTransform: "capitalize", color: "#FFF" }}
            color="secondary"
            disableElevation
            onClick={handleSubmit(onSubmit)}
            startIcon={ loading && <CircularProgress size={18} color='white'  />}
            disabled={loading}
          >
            Simpan & Setujui
          </Button>
        </Box>
      </Stack>

      <AlertNotif
        visible={alertOpt.visible}
        message={alertOpt.message}
        type={alertOpt.type}
        onClose={() => setAlertOpt({...alertOpt, visible: false})}
      />
    </Box>
  );
};

export default TambahPesanan;

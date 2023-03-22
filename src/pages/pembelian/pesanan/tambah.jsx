import {
  Box,
  Button,
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

  const [produkFormRow, setProdukFormRow] = useState([
    {
      product_name: '',
      unit: '',
      taxes: '',
      price: 0,
      total_price: 0,
      quantity: 0
    }
  ]);

  const [total, setTotal] = useState(0)
  const [subTotal, setSubtotal] = useState(0)
  const [discountTotal, setDiscountTotal] = useState(0)
  const [additionalDiscount, setAdditionalDiscount] = useState(0)

  const [showBiayaKirim, setShowBiayaKirim] = useState(false)

  const { getValues, control, register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      products: [
        {
          product_name: '',
          unit: '',
          taxes: '',
          price: 0,
          total_price: 0,
          quantity: 0
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'products' })

  const onSubmit = data => console.log(data)

  const setSummaryValue = () => {

    var totalList = []
    var discountList = []
    var priceAmountList = []

    for(let i = 0; i < produkFormRow.row; i++){
      const discount = getValues(`discountPrice${i}`) ?? 0
      const price = getValues(`priceWithOutDiscount${i}`) 
      const priceAmount = getValues(`total${i}`) 
      totalList.push(price)
      discountList.push(discount)
      priceAmountList.push(priceAmount)
    }

    const total = totalList.reduce((v, c) => v + c)
    const discount = discountList.reduce((v, c) => v + c)
    const totalAmount = priceAmountList.reduce((v,c) => v + c)

    setSubtotal(total)
    setDiscountTotal(discount)

    const biayaKirim = getValues('biayaKirim') ?? 0

    console.log('biaya krim : ', biayaKirim)
    console.log('total harga : ', totalAmount)
    const result = Number(biayaKirim) + Number(totalAmount)
    console.log('resutl  : ', result)
    setTotal(result)

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
          <SummaryRow label="Sub Total" number={subTotal} />
          <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
          {
            (discountTotal !== 0)
            &&
            <>
              <SummaryRow label="Diskon Per Item" number={discountTotal} />
              <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
            </>  
          }
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
              onClick={ () => setAdditionalDiscount(additionalDiscount+1) }
            >
              Tambah Diskon
            </Button>
          </Stack>
          <Divider sx={{ bgcolor: "#EAEAEA", my: "13px" }} />
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
                  {...register('biayaKirim', { onChange: () => setSummaryValue() })}
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
              {total}
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
          >
            Simpan & Setujui
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default TambahPesanan;

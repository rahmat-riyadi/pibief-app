import {
    Box,
    Button,
    Divider,
    IconButton,
    InputBase,
    NativeSelect,
    Stack,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { AddRounded, Delete, KeyboardArrowDownRounded } from "@mui/icons-material";
  import { useForm } from "react-hook-form";
  
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
  
  const ProdukInputLabel = ({ label }) => {
    return (
      <Typography
        variant="body1"
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          width: "100%",
          color: "greyFont.main",
          mb: 1,
        }}
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
  
  const TambahPesananPenjualan = () => {
  
    const [produkFormRow, setProdukFormRow] = useState({
      row: 1,
      data: []
    });
  
    const [total, setTotal] = useState(0)
    const [subTotal, setSubtotal] = useState(0)
    const [discountTotal, setDiscountTotal] = useState(0)
    const [additionalDiscount, setAdditionalDiscount] = useState(0)
  
    const [showBiayaKirim, setShowBiayaKirim] = useState(false)
  
    const { getValues, setValue, register, handleSubmit, formState: { errors } } = useForm()
  
    const onSubmit = data => console.log(data)
  
    const handleDeleteProdukRow = (idx) => {
  
      const newData = produkFormRow.data.filter( (e,i) => i !== idx )
  
      setProdukFormRow({
        row: produkFormRow.row - 1,
        data: newData
      })
  
    }
  
    const handleTotal = (e, idx) => {
  
      const discount = getValues(`diskon${idx}`) ?? 0
      const harga = getValues(`harga${idx}`)
      const kuantitas = getValues(`kuantitas${idx}`)
  
      setValue(`priceWithOutDiscount${idx}`, harga*kuantitas)
  
      // eslint-disable-next-line
      if(discount == 0 ){
        setValue(`total${idx}`, harga*kuantitas)
        setValue(`discountPrice${idx}`, 0)
        setSummaryValue()
        return
      }
  
      var totalPrice = harga * kuantitas
      const discountPoint  =  totalPrice * (discount/100)
      totalPrice = totalPrice - discountPoint
  
      if(discountPoint !== 0 && discountPoint !== undefined){
        setValue(`discountPrice${idx}`, discountPoint)
      }
      
      setValue(`total${idx}`, totalPrice)
      setSummaryValue()
  
    }
  
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
            <InputBase sx={{ ...baseInputStyle, width: "100%" }} {...register('noOrder', { required: { value: true, message: 'masukkan nomor order' } })} />
            {errors.noOrder && <ErrorText text={errors.noOrder.message} />}
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
          <Box sx={{ flex: 1 }}>
            <FormInputLabel label="Tanggal Pesan" />
            <InputBase type="date" sx={{ ...baseInputStyle, width: "100%" }} {...register('tglPesan', { required: { value: true, message: 'masukkan tanggal ' } })} />
            {errors.tglPesan && <ErrorText text={errors.tglPesan.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 2 }}>
            <FormInputLabel label="Tanggal Jatuh Tempo" />
            <InputBase sx={{ ...baseInputStyle, width: "100%" }} type="date" {...register('tglTempo', { required: { value: true, message: 'masukkan tanggal ' } })} />
            {errors.tglTempo && <ErrorText text={errors.tglTempo.message} />}
          </Box>
          <Box sx={{ flex: 1 }}>
            <FormInputLabel label="Pembayaran" />
            <NativeSelect
              input={<InputBase/>}
              sx={{ ...baseInputStyle, width: "100%" }}
              IconComponent={() => <KeyboardArrowDownRounded />}
              {...register('pembayaran', { required: { value: true, message: 'pilih metode pembayaran ' }})}
            >
              <option>Cash On Delivery</option>
              <option>Credit</option>
            </NativeSelect>
            {errors.pembayaran && <ErrorText text={errors.pembayaran.message} />}
          </Box>
        </Stack>
        <Stack direction="row" justifyContent="space-between">
          <Box sx={{ flex: 1 }}>
            <FormInputLabel label="Gudang" />
            <NativeSelect
              input={<InputBase/>}
              sx={{ ...baseInputStyle, width: "100%" }}
              IconComponent={() => <KeyboardArrowDownRounded />}
              {...register('gudang', { required: { value: true, message: 'pilih gudang ' } })}
            >
              <option>Gudang Utama</option>
              <option>Gudang Tidak Utama</option>
            </NativeSelect>
            {errors.gudang && <ErrorText text={errors.gudang.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 2 }}>
            <FormInputLabel label="Tag" />
            <NativeSelect
              input={<InputBase/>}
              sx={{ ...baseInputStyle, width: "100%" }}
              IconComponent={() => <KeyboardArrowDownRounded />}
              {...register('tag', { required: { value: true, message: 'pilih cabang' } })}
            >
              <option>Cabang 1</option>
              <option>Cabang 2</option>
            </NativeSelect>
            {errors.tag && <ErrorText text={errors.tag.message} />}
          </Box>
          <Box sx={{ flex: 1 }}>
            <FormInputLabel label="Apoteker Penanggung Jawab" />
            <InputBase sx={{ ...baseInputStyle, width: "100%" }} {...register('penanggungJawab', { required: { value: true, message: 'masukkan penanggung jawab' } })}  />
            {errors.penanggungJawab && <ErrorText text={errors.penanggungJawab.message} />}
          </Box>
        </Stack>
        <Typography variant="body1" sx={{ mb: "20px", fontWeight: "500", my: 3 }}>
          Form Vendor
        </Typography>
        {[...Array(produkFormRow.row)].map((e, i) => (
          <Stack
            id={i}
            justifyContent="space-between"
            direction="row"
            sx={{ mb: 2, borderBottom: "1px solid #EAEAEA", pb: 3 }}
          >
            <InputBase type="hidden" {...register(`priceWithOutDiscount${i}`)} />
            <InputBase type="hidden" {...register(`discountPrice${i}`)} />
            <Box sx={{ flex: 1.5, mr: 1 }}>
              <ProdukInputLabel label='Produk' />
              <InputBase 
                fullWidth 
                {...register(`produk${i}`)}
                sx={{ ...baseInputStyle }} 
              />
            </Box>
            <Box sx={{ flex: 1, mx: 1 }}>
              <ProdukInputLabel label="Kuantitas" />
              <InputBase 
                fullWidth 
                type="number" 
                sx={{ ...baseInputStyle }}
                {...register(`kuantitas${i}`, { onChange: (e) => handleTotal(e, i) })}
              />
            </Box>
            <Box sx={{ flex: 1, mx: 1 }}>
              <ProdukInputLabel label="Satuan" />
              <NativeSelect
                input={<InputBase />}
                sx={{ ...baseInputStyle, width: "100%" }}
                IconComponent={() => <KeyboardArrowDownRounded />}
                {...register(`satuan${i}`)}
              >
                <option>Pcs</option>
                <option>Botol</option>
              </NativeSelect>
            </Box>
            <Box sx={{ flex: 1, mx: 1 }}>
              <ProdukInputLabel label="Diskon" />
              <InputBase 
                fullWidth 
                type="number" 
                sx={{ ...baseInputStyle }}
                {...register(`diskon${i}`, { onChange: (e) => handleTotal(e,i) })}
              />
            </Box>
            <Box sx={{ flex: 1, mx: 1 }}>
              <ProdukInputLabel label="Harga" />
              <InputBase 
                fullWidth 
                sx={{ ...baseInputStyle }} 
                {...register(`harga${i}`, { onChange: (e) => handleTotal(e,i) })}
              />
            </Box>
            <Box sx={{ flex: 1, mx: 1 }}>
              <ProdukInputLabel label="Pajak" />
              <NativeSelect
                input={<InputBase />}
                sx={{ ...baseInputStyle, width: "100%" }}
                IconComponent={() => <KeyboardArrowDownRounded />}
                {...register(`pajak${i}`)}
              >
                <option>PPN</option>
                <option>PPH</option>
              </NativeSelect>
            </Box>
            <Box sx={{ flex: 1.2, ml: 1 }}>
              <ProdukInputLabel label="Total" />
              <InputBase
                fullWidth
                sx={{ ...baseInputStyle, textAlign: "right" }}
                {...register(`total${i}`)}
              />
            </Box>
            {produkFormRow !== 1 && (
              <IconButton
                disableRipple
                onClick={() => handleDeleteProdukRow(i)}
                sx={{
                  height: "50px",
                  width: "50px",
                  alignSelf: "flex-end",
                }}
              >
                <Delete />
              </IconButton>
            )}
          </Stack>
        ))}
        <Button
          variant="outlined"
          color="secondary"
          sx={{ textTransform: "capitalize" }}
          onClick={() => setProdukFormRow({ row: produkFormRow.row+1, data: produkFormRow.data })}
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
            <Stack direction='row' columnGap={2} mt={2}>
              <Button
                variant="contained"
                fullWidth
                sx={{ 
                  textTransform: "capitalize", 
                  bgcolor: 'rgba(5, 165, 225, 0.1)',
                  color: 'secondary.main'
                }}
                disableElevation
                onClick={handleSubmit(onSubmit)}
              >
                Batal
              </Button>
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
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default TambahPesananPenjualan;
  
import { Delete, KeyboardArrowDownRounded } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  NativeSelect,
  Stack,
  Typography,
} from "@mui/material";

const baseInputStyle = {
  bgcolor: "#F5F8FA",
  py: "5px",
  px: "10px",
  fontSize: "14px",
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

const ErrorText = ({ text }) => {
  return <Typography variant='body1' sx={{ color: 'red', fontSize: '12px', mt: '5px' }} >{text}</Typography>
}

const ProductRow = ({ register, showDelete, remove, handleTotal, index, errors }) => {
  return (
    <Stack
          justifyContent="space-between"
          direction="row"
          sx={{ mb: 2, borderBottom: "1px solid #EAEAEA", pb: 3 }}
        >
          <InputBase type="hidden"  />
          <InputBase type="hidden"  />
          <Box sx={{ flex: 1.5, mr: 1 }}>
            <ProdukInputLabel label='Produk' />
            <InputBase 
              fullWidth
              sx={{ ...baseInputStyle }}
              {...register(`products.${index}.product_name`, { required: {
                value: true,
                message: 'Masukkan Nama'
              }})}
            />
            {errors.vendor && <ErrorText text={errors.products[index].product_name.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 1 }}>
            <ProdukInputLabel label="Kuantitas" />
            <InputBase 
              fullWidth 
              type="number"
              placeholder="0"
              sx={{ ...baseInputStyle }}
              {...register(`products.${index}.quantity`, {
                required: {
                  value: true,
                  message: 'Masukan Jumlah Produk'
                }, 
                onChange: e => handleTotal(e) 
              })}
            />
            {errors.vendor && <ErrorText text={errors.products[index].quantity.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 1 }}>
            <ProdukInputLabel label="Satuan" />
            <NativeSelect
              input={<InputBase />}
              sx={{ ...baseInputStyle, width: "100%" }}
              IconComponent={() => <KeyboardArrowDownRounded />}
              {...register(`products.${index}.unit`, { required: { value: true, message: 'Masukan Unit' } })}
            >
              <option>Pcs</option>
              <option>Botol</option>
            </NativeSelect>
            {errors.vendor && <ErrorText text={errors.products[index].unit.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 1 }}>
            <ProdukInputLabel label="Diskon" />
            <InputBase 
              fullWidth 
              type="number" 
              sx={{ ...baseInputStyle }}
              {...register(`products.${index}.discount`, { onChange: e => handleTotal(e) })}
            />
          </Box>
          <Box sx={{ flex: 1, mx: 1 }}>
            <ProdukInputLabel label="Harga" />
            <InputBase 
              fullWidth
              type="number" 
              sx={{ ...baseInputStyle }}
              {...register(`products.${index}.price`, { 
                required: {
                  value: true,
                  message: 'Masukan Harga'
                }, 
                onChange: e => handleTotal(e),
              })}
            />
            {errors.vendor && <ErrorText text={errors.products[index].price.message} />}
          </Box>
          <Box sx={{ flex: 1, mx: 1 }}>
            <ProdukInputLabel label="Pajak" />
            <NativeSelect
              input={<InputBase />}
              sx={{ ...baseInputStyle, width: "100%" }}
              IconComponent={() => <KeyboardArrowDownRounded />}
              {...register(`products.${index}.taxes`, { 
                required: {
                  value: true,
                  message: 'Masukan Pajak'
                }, 
                onChange: e => handleTotal(e)
              })}
            >
              <option>PPN</option>
              <option>PPH</option>
            </NativeSelect>
            {errors.vendor && <ErrorText text={errors.products[index].taxes.message} />}
          </Box>
          <Box sx={{ flex: 1.2, ml: 1 }}>
            <ProdukInputLabel label="Total" />
            <InputBase
              fullWidth
              sx={{ ...baseInputStyle, textAlign: "right" }}
              readOnly
              {...register(`products.${index}.total_price`, { required: true, onChange: e => handleTotal(e) })}
            />
          </Box>
          {
          showDelete 
          &&
            <IconButton
              disableRipple
              onClick={() => remove(index)}
              sx={{
                height: "50px",
                width: "50px",
                alignSelf: "flex-end",
              }}
            >
              <Delete />
            </IconButton>
          }
        </Stack>
  )
}

export default ProductRow
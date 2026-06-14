import { TextField } from '@mui/material'

export const FormInput = ({
  label,
  value,
  onChange,
  error,
  type = 'text',
  name,
  fullWidth = true,
  required = false,
  disabled = false,
  helperText = '',
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <TextField
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error || helperText}
        fullWidth={fullWidth}
        disabled={disabled}
        required={required}
        {...props}
      />
    </div>
  )
}

export default FormInput

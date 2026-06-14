import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  CircularProgress,
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const ReusableModal = ({
  open,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmColor = 'primary',
  loading = false,
  maxWidth = 'sm',
  fullWidth = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={loading ? undefined : onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      PaperProps={{
        className: 'rounded-2xl p-2 dark:bg-slate-900 border dark:border-slate-800',
      }}
    >
      <DialogTitle className="flex justify-between items-center text-slate-800 dark:text-slate-100 font-bold text-lg">
        {title}
        {onClose && (
          <IconButton
            onClick={onClose}
            disabled={loading}
            size="small"
            className="text-slate-400 hover:text-slate-600"
          >
            <CloseIcon />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent className="py-2 text-slate-600 dark:text-slate-400">{children}</DialogContent>
      <DialogActions className="px-6 py-4 gap-2">
        {onClose && (
          <Button onClick={onClose} disabled={loading} color="inherit" variant="text">
            {cancelText}
          </Button>
        )}
        {onConfirm && (
          <Button
            onClick={onConfirm}
            disabled={loading}
            color={confirmColor}
            variant="contained"
            className="font-semibold px-5"
            startIcon={loading ? <CircularProgress size={16} color="inherit" /> : null}
          >
            {loading ? 'Processing...' : confirmText}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default ReusableModal

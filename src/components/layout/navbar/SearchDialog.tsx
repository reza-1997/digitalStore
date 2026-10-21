
'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material';

import { Search as SearchIcon } from '@mui/icons-material';
import { NavbarDict } from '@/src/types';


interface SearchDialogProps {
    open: boolean;
    lang: 'fa' | 'en';
    dict: NavbarDict['search'] & {
        submitSearch: string;
    };
    onClose: () => void;
}

export default function SearchDialog({
    open,
    lang,
    dict,
    onClose,
}: SearchDialogProps) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const query = searchTerm.trim();

        if (!query) return;

        onClose();

        router.push(
            `/${lang}/search?q=${encodeURIComponent(query)}`
        );
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth="sm"
            aria-labelledby="navbar-search-title"
        >
            <DialogTitle id="navbar-search-title">
                {dict.title}
            </DialogTitle>

            <DialogContent>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ py: 1 }}
                >
                    <TextField
                        autoFocus
                        fullWidth
                        value={searchTerm}
                        onChange={(event) =>
                            setSearchTerm(event.target.value)
                        }
                        placeholder={dict.placeholder}
                        slotProps={{
                            htmlInput: {
                                dir: lang === 'fa' ? 'rtl' : 'ltr',
                            },
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            type="submit"
                                            aria-label={dict.submitSearch}
                                            disabled={!searchTerm.trim()}
                                        >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        disabled={!searchTerm.trim()}
                        sx={{ mt: 2, py: 1.25 }}
                    >
                        {dict.submit}
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
}
